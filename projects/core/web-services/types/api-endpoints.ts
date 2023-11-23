type StringWithAutocomplete<T> = T | (string & Record<never, never>);
export type API_ENDPOINTS = StringWithAutocomplete<
| "app"
| "audit.notify"
| "challenge"
| "doc.textchunks"
| "labels"
| "multi"
| "OriginalDocMerge"
| "plugin"
| "preview"
| "principal"
| "principal/list"
| "principal/userId"
| "principal/userids"
| "query"
| "query.export"
| "query.links"
| "queryintent"
| "ratings"
| "recentqueries"
| "search.dataset"
| "search.rfm"
| "similardocuments"
| "suggestfield"
| "suggestquery"
| "usersettings"
| "webToken"
| "security.oauth"
| "security.saml"
>;