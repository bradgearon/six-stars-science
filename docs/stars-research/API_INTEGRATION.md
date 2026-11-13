# API connection contract (future scope)

This project currently makes **zero network calls to store research records**. The browser is the source of a local working copy only. Use a backend before relying on this system for multi-user collaboration or immutable experimental evidence.

Recommended endpoints:
- `GET /api/v1/projects/{projectId}/workspace` → `{schema,revision,taskState,trialState,runs,notes,evidenceMetadata}`
- `PUT /api/v1/projects/{projectId}/workspace` with `If-Match: <revision>`; atomic conflict-aware update.
- `POST /api/v1/projects/{projectId}/attachments` authenticated multipart binary upload returning signed object identifier and SHA-256.
- `GET /api/v1/projects/{projectId}/attachments/{id}` authenticated file retrieval.

Server responsibilities: OIDC or equivalent authentication, per-project authorization, rate limits, MIME validation and malware scanning, object-store versioning, durable backup, tenant isolation, audit log with actor/time/previous revision, privacy retention policy, idempotent create keys and encrypted transport. Never trust a client-supplied 'pass' or gate as actual proof; scientific review is separate.

Data schema: `christ-eye.workspace.v2`, a client-generated UUID per run and note, file evidence metadata plus content hash, and explicit protocol/configuration versions. Include event timestamps in ISO UTC, user-entered run times as ISO, units for every metric, statuses (`planned`, `in_progress`, `analyzed`, `met_criterion`, `failed`, `invalid`, `paused`). Do not embed protected ground truth in training-client endpoints.

Client migration: replace the stub `assets/service-adapter.js` with methods for authenticated pull/push and attachment upload. Preserve local export/import as an offline escape hatch; display sync state separately from local save state. Use controlled service-side record versioning, avoid last-write-wins silent overwrites.
