export function generateUniqueId() {
  const randomHex = Math.random().toString(16).slice(2);
  const timestamp = (new Date()).getTime().toString(36);
  return randomHex + timestamp;
}
