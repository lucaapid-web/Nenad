import { StageKey } from './types';

/**
 * Beispielfotos pro Arbeitsschritt (KI-generiert, nur für die Demo).
 * Im Livebetrieb kommen hier echte Fotos aus der Werkstatt hin.
 * TODO vor Livegang: Bilder nach assets/stages/ herunterladen und lokal einbinden.
 */
const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_37XZSEVWybaI5dd1JWEjbs0gy6Y';

export const STAGE_PHOTOS: Partial<Record<StageKey, string>> = {
  intake: `${CDN}/hf_20261105_185142_a254144c-0647-4144-8950-a9c6354a13aa.png`,
  body: `${CDN}/hf_20261105_185142_905e73d0-1b68-493f-ac5b-d7a8d0efe06d.png`,
  prep: `${CDN}/hf_20261105_185140_a63e6c71-cd8e-481c-8c63-f3d41abfafd4.png`,
  paint: `${CDN}/hf_20261105_185141_1c77fa32-869f-4424-b3b3-25fc4ef22cb5.png`,
  drying: `${CDN}/hf_20261105_185143_a6c2bb70-396b-442c-b713-319e8127b9f9.png`,
  finish: `${CDN}/hf_20261105_185140_6abc7e53-34af-4d13-9aca-555cc3660c3c.png`,
  quality: `${CDN}/hf_20261105_185141_39ae7b98-b1f7-4d20-95f8-589d14cd85fb.png`,
};
