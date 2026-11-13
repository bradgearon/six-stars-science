/* ChristEye service adapter contract v0.2: DISABLED BY DEFAULT.
   This module does not make requests and is not loaded by the site.
   After a server is deployed, implement authenticated sync, revision preconditions,
   encrypted transport, blob signing, and server-side validation and audit. */
export const serviceConfig = Object.freeze({ enabled: false, baseUrl: null, projectId: null });
export async function syncWorkspace(_snapshot) { throw new Error('Remote storage is not configured. Export a backup instead.'); }
export async function uploadAttachment(_blob, _metadata) { throw new Error('Remote file upload is not configured.'); }
