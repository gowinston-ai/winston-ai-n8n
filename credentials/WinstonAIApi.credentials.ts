import { IAuthenticateGeneric, Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class WinstonAiApi implements ICredentialType {
	name = 'WinstonAiApi';
	displayName = 'Winston AI API';
	icon = 'file:winstonai.svg' as Icon;
	// Documentation URL updated placeholder
	documentationUrl = 'https://docs.gowinston.ai/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer " + $credentials.apiKey}}',
			},
		},
	};
}
