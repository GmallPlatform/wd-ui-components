import { sendMessage, setError, setSuccess } from "@/utils/sendMessage";

export const createAnyEntity = async (
  data: any,
  service: any,
  message?: string,
  serviceOptions?: any,
  channel?: string,
) => {
  sendMessage("showParange", undefined, channel);
  try {
    // console.log(message);
    await service.createOne(data, serviceOptions);
    // this reload event from initdata for this service and was set while servoce was created in the service package

    if (service.reloadEvents && service.reloadEvents.create) {
      sendMessage(service.reloadEvents.create, undefined, channel);
    }
    setSuccess(message || "Created successfully", channel);
  } catch (err: any) {
    console.log(err);
    setError(err.message || "an error occurred", channel);
    throw err;
  } finally {
    sendMessage("hideParange", undefined, channel);
    setTimeout(() => {
      setSuccess("", channel);
      setError("", channel);
    }, 5000);
  }
};
export const updateAnyEntity = async (
  id: string,
  data: any,
  service: any,
  message?: string,
  serviceOptions?: any,
  channel?: string,
) => {
  sendMessage("showParange", undefined, channel);
  try {
    await service.updateOne(id, data, serviceOptions);
    if (service.reloadEvents && service.reloadEvents.update) {
      sendMessage(service.reloadEvents.update, undefined, channel);
    }
    setSuccess(message || "Updated successfully", channel);
  } catch (err: any) {
    console.log(err);
    setError(err.message || "an error occurred", channel);
    throw err;
  } finally {
    sendMessage("hideParange", undefined, channel);
    setTimeout(() => {
      setSuccess("", channel);
      setError("", channel);
    }, 5000);
  }
};
export const deleteAnyEntity = async (
  id: string,
  service: any,
  message?: string,
  channel?: string,
) => {
  sendMessage("showParange", undefined, channel);
  try {
    await service.deleteOne(id);
    if (service.reloadEvents && service.reloadEvents.delete) {
      setTimeout(() => {
        sendMessage(service.reloadEvents.delete, undefined, channel);
      }, 100);
    }
    setSuccess(message || "Deleted successfully", channel);
  } catch (err: any) {
    console.log(err);
    setError(err.message || "an error occurred", channel);
    throw err;
  } finally {
    sendMessage("hideParange", undefined, channel);
    setTimeout(() => {
      setSuccess("", channel);
      setError("", channel);
    }, 5000);
  }
};
export const getAnyEntity = async (
  id: string,
  service: any,
  message?: string,
  channel?: string,
) => {
  sendMessage("showParange", undefined, channel);
  try {
    const res = await service.getOne(id);
    setSuccess(message || "Get successfully", channel);
    return res;
  } catch (err: any) {
    console.log(err);
    setError(err.message || "an error occurred", channel);
    throw err;
  } finally {
    sendMessage("hideParange", undefined, channel);
    setTimeout(() => {
      setSuccess("", channel);
      setError("", channel);
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
  channel,
}: {
  files: File[];
  entityValueId: string;
  fieldName: string;
  service: any;
  message?: string;
  serviceOptions?: any;
  channel?: string;
}) => {
  sendMessage("showParange", undefined, channel);
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });
  formData.append("entityValueId", entityValueId);
  formData.append("field", fieldName);
  try {
    const res = await service.uploadImgage(formData, serviceOptions);
    setSuccess(message || "Successfully uploaded", channel);
    return res;
  } catch (error: any) {
    console.log(error);
    setError(error.message || "An error occurred", channel);
    throw error;
  } finally {
    sendMessage("hideParange", undefined, channel);
    setTimeout(() => {
      setSuccess("", channel);
      setError("", channel);
    }, 5000);
  }
};
export const deleteImgageForAnyEntity = async (
  id: string,
  service: any,
  message?: string,
  channel?: string,
) => {
  sendMessage("showParange", undefined, channel);
  try {
    await service.deleteImage(id);
    if (service.reloadEvents && service.reloadEvents.delete) {
      setTimeout(() => {
        sendMessage(service.reloadEvents.delete, undefined, channel);
      }, 100);
    }
    setSuccess(message || "Deleted successfully", channel);
  } catch (err: any) {
    console.log(err);
    setError(err.message || "an error occurred", channel);
    throw err;
  } finally {
    sendMessage("hideParange", undefined, channel);
    setTimeout(() => {
      setSuccess("", channel);
      setError("", channel);
    }, 5000);
  }
};
