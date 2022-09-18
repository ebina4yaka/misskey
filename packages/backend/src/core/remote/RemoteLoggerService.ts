import { Inject, Injectable } from '@nestjs/common';
import Logger from '@/logger.js';

@Injectable()
export class RemoteLoggerService {
	public logger: Logger;

	constructor(
	) {
		this.logger = new Logger('remote', 'cyan');
	}
}
