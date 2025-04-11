import { useDropzone } from "react-dropzone";
import styles from "./FileUpload.module.css";
import { IEditField } from "../../types/fields";
import { useCallback, useState } from "react";

import {
  deleteImgageForAnyEntity,
  uploadImgageForAnyEntity,
} from "@/utils/createUpdateDeleteAnyEntity";
import { getLangData } from "@/constants/langData";
import { defaultLang } from "@/constants/constants";
import { Icon_attach_file, Icon_close } from "./Icons";
import { ConfirmModal } from "../modal/ConfirmModal";

interface IItem {
  [key: string]: any;
}
interface EntityFormProps {
  field: IEditField;
  currentItem: IItem;
  itemsService: any;
  serviceOptions?: {
    headers?: any;
    params?: any;
    hiddenFields?: any[];
  };
}
interface IImage {
  id: string;
  url: string;
  displayIndex: number;
}
const { VITE_IMAGE_HOST } = import.meta.env;

const ImageUploadComponent: React.FC<EntityFormProps> = ({
  field,
  currentItem,
  itemsService,
}) => {
  const langData = getLangData(defaultLang);
  const [images, setImages] = useState<IImage[]>(
    currentItem[field.name] ? [currentItem[field.name]] : [],
  );
  const [openModal, setOpenModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleSubmit = useCallback(
    async (files?: File[]) => {
      const res = await uploadImgageForAnyEntity({
        files: files && files.length ? files : selectedFiles,
        entityValueId: currentItem?.id || "",
        fieldName: field.name,
        service: itemsService,
      });

      if (field.name === "image") {
        setImages(res);
      } else if (field.name === "gallery") {
        setImages([...res]);
      }
      handleClearSelection();
    },
    [currentItem?.id, field.name, itemsService, selectedFiles],
  );

  const handleFilesAdded = useCallback(
    (newFiles: File[]) => {
      if (field.name === "image") {
        setSelectedFiles([newFiles[0]]);
        handleSubmit([newFiles[0]]);
      } else {
        // Filter out files that are already in the selectedFiles array based on name and size
        const uniqueNewFiles = newFiles.filter(
          (newFile) =>
            !selectedFiles.some(
              (existingFile) =>
                existingFile.name === newFile.name &&
                existingFile.size === newFile.size,
            ),
        );

        // Update state with the filtered unique files
        setSelectedFiles([...selectedFiles, ...uniqueNewFiles]);
      }
    },
    [field.name, selectedFiles, handleSubmit],
  );

  const handleFileRemoved = (fileToRemove: File) => {
    setSelectedFiles(selectedFiles.filter((file) => file !== fileToRemove));
  };

  const handleClearSelection = () => {
    setSelectedFiles([]);
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      handleFilesAdded(acceptedFiles);
    },
    [handleFilesAdded],
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleImageRemoved = async () => {
    if (currentImage) {
      await deleteImgageForAnyEntity(currentImage.id, itemsService);
      setImages(images.filter((img) => img.id !== currentImage.id));
    }
  };

  const [currentImage, setCurrentImage] = useState<IImage | null>(null);

  return (
    <>
      {openModal && (
        <ConfirmModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onConfirm={handleImageRemoved}
          title={"Delete image"}
          confirmLabel={"Confirm"}
          cancelLabel={"Cancel"}
        >
          <p className="text-base text-gray-700">
            Are you sure you want to delete this image? This action cannot be
            undone.
          </p>
        </ConfirmModal>
      )}
      <div className={styles.imageUploadContainer}>
        <div className={styles.title}>
          <span className="body-s-medium">{langData?.uploadImage}</span>
          <div className="buttonsWrpper">
            {field.name !== "image" && (
              <button
                className="button primaryButton"
                onClick={() => handleSubmit()}
                disabled={selectedFiles.length === 0}
                data-size="small"
              >
                <span className="body-m-medium">{langData?.upload}</span>
              </button>
            )}
          </div>
        </div>

        <div className={styles.imagesWithForm}>
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate
            autoComplete="off"
            className={styles.file_upload_container}
          >
            <div className={styles.file_upload_container}>
              <div
                {...getRootProps()}
                className={styles.dropzone}
                // sx={error ? { borderColor: "system.error" } : {}}
              >
                <input {...getInputProps()} />
                <div className={styles.wrap_for_text}>
                  <span className="body-m-regular">
                    {langData?.dropFilesToUploadOr}
                  </span>

                  <div className={`${styles.file_select} body-m-regular`}>
                    {langData?.selectFiles}
                  </div>
                </div>
              </div>
              {/* {error && (
            <span
              className="body-xs-regular colorSystemError"
              style={{ lineHeight: "12px" }}
            >
              Select file
            </span>
          )} */}
              {selectedFiles.map((file, index) => (
                <div key={index} className={styles.file_info}>
                  <div className={styles.firstIcon}>
                    <Icon_attach_file />
                  </div>

                  <span
                    className="body-s-medium colorGreyBlack"
                    style={{ flex: 1 }}
                  >
                    {file.name}
                  </span>
                  <span className="body-s-regular colorGrey500">
                    {transformFileSize(file.size)}
                  </span>

                  <Icon_close
                    className={styles.closeIcon}
                    onClick={() => handleFileRemoved(file)}
                  />
                </div>
              ))}
            </div>
          </form>
          <div className={styles.imagesPreviewContainer}>
            {images.map((img) => (
              <div className={styles.imageWrapper} key={img.id}>
                <img
                  src={
                    img.url.startsWith("http")
                      ? img.url
                      : VITE_IMAGE_HOST
                        ? `${VITE_IMAGE_HOST}${img.url}`
                        : img.url
                  }
                  alt="image"
                />
                <Icon_close
                  className={styles.closeIcon}
                  onClick={() => {
                    setCurrentImage(img);
                    setOpenModal(true);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ImageUploadComponent;
function transformFileSize(bytes: number, decimals = 2): string {
  // try {
  //   if (bytes === 0) return "0 Bytes";
  //   const k = 1024;
  //   const dm = decimals < 0 ? 0 : decimals;
  //   const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  //   const i = Math.floor(Math.log(bytes) / Math.log(k));
  //   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  // } catch (err) {
  //   return "0 Bytes";
  // }
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
