import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class WinstonAIApi implements ICredentialType {
	name = 'WinstonAIApi';
	displayName = 'Winston AI API';
	// Documentation URL updated placeholder
	documentationUrl = 'https://docs.gowinston.ai/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
	authenticate = {
		type: 'generic',
		properties: {
			headers: {
				'Authorization': '={{"Bearer " + $credentials.apiKey}}',
			},
		},
	} as IAuthenticateGeneric;
} 