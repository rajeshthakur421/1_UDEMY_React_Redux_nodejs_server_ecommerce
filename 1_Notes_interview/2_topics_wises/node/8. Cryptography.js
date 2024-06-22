const crypto = require("crypto");

// Generate RSA key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

// Encrypt with public key function
function encryptWithPublicKey(publicKey, plaintext) {
  const encryptedBuffer = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    Buffer.from(plaintext),
  );
  return encryptedBuffer.toString("base64");
}

// Decrypt with private key function
function decryptWithPrivateKey(privateKey, encryptedBase64) {
  const encryptedBuffer = Buffer.from(encryptedBase64, "base64");
  const decryptedBuffer = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    encryptedBuffer,
  );
  return decryptedBuffer.toString("utf8");
}

// Example usage
const plaintext = "Hello, World!";
const encrypted = encryptWithPublicKey(publicKey, plaintext);
console.log("Encrypted:", encrypted);

const decrypted = decryptWithPrivateKey(privateKey, encrypted);
console.log("Decrypted:", decrypted);
