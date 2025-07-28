/* eslint-disable n8n-nodes-base/cred-class-field-name-uppercase-first-char */
import { IAuthenticateGeneric, Icon, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

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
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: 'https://api.gowinston.ai',
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

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.domain}}',
			url: '/credits',
			headers: {
				Authorization: '={{"Bearer " + $credentials.apiKey}}',
			},
			method: 'GET',
		}
	}


}
