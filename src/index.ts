/**
 * @amlplugins/google-cloud-dialogflow-cx
 *
 * Thin namespaced re-export of the native @google-cloud/dialogflow-cx SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Dialogflow CX.
 */

import * as _sdk from "@google-cloud/dialogflow-cx";
export * from "@google-cloud/dialogflow-cx";
export { _sdk as sdk };
export default _sdk;
