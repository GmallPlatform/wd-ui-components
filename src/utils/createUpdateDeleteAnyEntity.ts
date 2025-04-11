import { sendMessage, setError, setSuccess } from "@/utils/sendMessage";

export const createAnyEntity = async (
  data: any,
  service: any,
  message?: string,
  serviceOptions?: any,
) => {
  sendMessage("showParange");
  try {
    // console.log(message);
    await service.createOne(data, serviceOptions);
    // this reload event from initdata for this service and was set while servoce was created in the service package

    if (service.reloadEvents && service.reloadEvents.create) {
      sendMessage(service.reloadEvents.create);
    }
    setSuccess(message || "Created successfully");
  } catch (err: any) {
    console.log(err);
    setError(err.message || "an error occurred");
    throw err;
  } finally {
    sendMessage("hideParange");
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
  }
};
export const updateAnyEntity = async (
  id: string,
  data: any,
  service: any,
  message?: string,
  serviceOptions?: any,
) => {
  sendMessage("showParange");
  try {
    await service.updateOne(id, data, serviceOptions);
    if (service.reloadEvents && service.reloadEvents.update) {
      sendMessage(service.reloadEvents.update);
    }
    setSuccess(message || "Updated successfully");
  } catch (err: any) {
    console.log(err);
    setError(err.message || "an error occurred");
    throw err;
  } finally {
    sendMessage("hideParange");
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
  }
};
export const deleteAnyEntity = async (
  id: string,
  service: any,
  message?: string,
) => {
  sendMessage("showParange");
  try {
    await service.deleteOne(id);
    if (service.reloadEvents && service.reloadEvents.delete) {
      setTimeout(() => {
        sendMessage(service.reloadEvents.delete);
      }, 100);
    }
    setSuccess(message || "Deleted successfully");
  } catch (err: any) {
    console.log(err);
    setError(err.message || "an error occurred");
    throw err;
  } finally {
    sendMessage("hideParange");
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
  }
};
export const getAnyEntity = async (
  id: string,
  service: any,
  message?: string,
) => {
  sendMessage("showParange");
  try {
    const res = await service.getOne(id);
    setSuccess(message || "Get successfully");
    return res;
  } catch (err: any) {
    console.log(err);
    setError(err.message || "an error occurred");
    throw err;
  } finally {
    sendMessage("hideParange");
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
  }
};
export const uploadImgageForAnyEntity = async ({
  files,
  entityValueId,
  fieldName,
  service,
  message,
  serviceOptions,
}: {
  files: File[];
  entityValueId: string;
  fieldName: string;
  service: any;
  message?: string;
  serviceOptions?: any;
}) => {
  sendMessage("showParange");
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });
  formData.append("entityValueId", entityValueId);
  formData.append("field", fieldName);
  try {
    const res = await service.uploadImgage(formData, serviceOptions);
    setSuccess(message || "Successfully uploaded");
    return res;
  } catch (error: any) {
    console.log(error);
    setError(error.message || "An error occurred");
    throw error;
  } finally {
    sendMessage("hideParange");
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
  }
};
export const deleteImgageForAnyEntity = async (
  id: string,
  service: any,
  message?: string,
) => {
  sendMessage("showParange");
  try {
    await service.deleteImage(id);
    if (service.reloadEvents && service.reloadEvents.delete) {
      setTimeout(() => {
        sendMessage(service.reloadEvents.delete);
      }, 100);
    }
    setSuccess(message || "Deleted successfully");
  } catch (err: any) {
    console.log(err);
    setError(err.message || "an error occurred");
    throw err;
  } finally {
    sendMessage("hideParange");
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
  }
};
