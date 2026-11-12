import { trackEvent } from "@excalidraw/excalidraw/analytics";

import type { Collaborator } from "@excalidraw/excalidraw/types";

/**
 * Reports collaborator presence updates so we can size realtime traffic
 * per session.
 */
export const reportCollaboratorUpdate = (updates: Partial<Collaborator>) => {
  trackEvent("collab", "collaborator_update", JSON.stringify(updates));
};
