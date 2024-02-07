"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66511],{66511:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/core/src/index.tsx","description":"`useShow` hook allows you to fetch the desired record.\\nIt uses `getOne` method as query function from the dataProvider that is\\npassed to {@link https://refine.dev/docs/api-reference/core/components/refine-config/ `<Refine>`}.","displayName":"useShow","props":{"resource":{"defaultValue":{"value":"Reads `:resource` from the URL"},"description":"Resource name for API data interactions","name":"resource","required":false,"type":{"name":"string"},"tags":{"default":"Reads `:resource` from the URL"}},"id":{"defaultValue":{"value":"Reads `:id` from the URL"},"description":"Data item ID for API data interactions","name":"id","required":false,"type":{"name":"[BaseKey](/docs/core/interface-references/#basekey)"},"tags":{"default":"Reads `:id` from the URL"}},"queryOptions":{"defaultValue":null,"description":"react-query\'s [useQuery](https://tanstack.com/query/v4/docs/reference/useQuery) options","name":"queryOptions","required":false,"type":{"name":"UseQueryOptions<GetOneResponse<TQueryFnData>, TError, GetOneResponse<TData>, QueryKey>"},"tags":{}},"meta":{"defaultValue":null,"description":"Additional meta data to pass to the data provider\'s `getOne`","name":"meta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"metaData":{"defaultValue":null,"description":"Additional meta data to pass to the data provider\'s `getOne`","name":"metaData","required":false,"type":{"name":"MetaQuery"},"tags":{"deprecated":"`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility."}},"dataProviderName":{"defaultValue":{"value":"`\\"default\\"`"},"description":"Target data provider name for API call to be made","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{"default":"`\\"default\\"`"}},"liveMode":{"defaultValue":{"value":"`\\"off\\"`"},"description":"Whether to update data automatically (\\"auto\\") or not (\\"manual\\") if a related live event is received. The \\"off\\" value is used to avoid creating a subscription.","name":"liveMode","required":false,"type":{"name":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`](/docs/api-reference/core/providers/live-provider/#livemode)"},"tags":{"type":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`] (/docs/api-reference/core/providers/live-provider/#livemode)","default":"`\\"off\\"`"}},"onLiveEvent":{"defaultValue":{"value":"`undefined`"},"description":"Callback to handle all related live events of this hook.","name":"onLiveEvent","required":false,"type":{"name":"[`(event: LiveEvent) => void`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`(event: LiveEvent) => void`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"liveParams":{"defaultValue":{"value":"`undefined`"},"description":"Params to pass to liveProvider\'s subscribe method if liveMode is enabled.","name":"liveParams","required":false,"type":{"name":"[`{ ids?: BaseKey[]; [key: string]: any; }`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`{ ids?: BaseKey[]; [key: string]: any; }`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"successNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((data?: GetOneResponse<TData>, values?: { [x: string]: any; id?: BaseKey; ... 5 more ...; gqlMutation?: DocumentNode | undefined; } | undefined, resource?: string | undefined) => false | OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"errorNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((error?: TError, values?: { [x: string]: any; id?: BaseKey; queryContext?: Omit<QueryFunctionContext<QueryKey, any>, \\"meta\\"> | undefined; ... 4 more ...; gqlMutation?: DocumentNode | undefined; } | undefined, resource?: string | undefined) => false | OpenNoti..."},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"overtimeOptions":{"defaultValue":null,"description":"","name":"overtimeOptions","required":false,"type":{"name":"UseLoadingOvertimeCoreOptions"},"tags":{}}},"generatedAt":1707314927161}')}}]);