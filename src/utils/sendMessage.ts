export function sendMessage(message: string, data?: any, channel?: string) {
  const detail =
    typeof channel === "string" && channel.length > 0
      ? { payload: data, channel }
      : data;
  const event = new CustomEvent(message, {
    detail,
  });
  window.dispatchEvent(event);
}
export function setError(error: string, channel?: string) {
  const detail =
    typeof channel === "string" && channel.length > 0
      ? { payload: error, channel }
      : error;
  const event = new CustomEvent("setError", {
    detail,
  });
  window.dispatchEvent(event);
}
export function setSuccess(success: string, channel?: string) {
  const detail =
    typeof channel === "string" && channel.length > 0
      ? { payload: success, channel }
      : success;
  const event = new CustomEvent("setSuccess", {
    detail,
  });
  window.dispatchEvent(event);
}
