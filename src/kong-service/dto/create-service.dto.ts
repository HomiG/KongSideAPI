import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateServiceDto {
  @ApiProperty({
    description:
      'A set of names that coresponds to the services that are going to be created',
    type: [String],
  })
  readonly name: string[];
  @ApiProperty({ description: 'The host of the upstream server.' })
  readonly host: string;
  @ApiProperty({
    default: 80,
    description: 'The upstream server port. Defaults to 80',
  })
  readonly port: number;
  @ApiPropertyOptional()
  @ApiProperty({
    description: 'The path to be used in requests to the upstream server.',
    default: '/path',
  })
  readonly path: string;
  @ApiPropertyOptional()
  @ApiProperty({
    type: [String],
    description:
      'An optional set of strings associated with the Service, for grouping and filtering.',
  })
  readonly tags: string[];
  @ApiPropertyOptional()
  @ApiProperty({
    description:
      'Shorthand attribute to set protocol, host, port and path at once. This attribute is write-only (the Admin API never “returns” the url).',
  })
  readonly url: string;
  @ApiProperty({
    default: 'http',
    description:
      'The protocol used to communicate with the upstream. Accepted values are: "grpc", "grpcs", "http", "https", "tcp", "tls", "udp". Default: "http".',
  })
  readonly protocol: string;
  @ApiPropertyOptional()
  @ApiProperty({
    default: 5,
    description:
      'The number of retries to execute upon failure to proxy. Defaults to 5.',
  })
  readonly retries: number;
  @ApiPropertyOptional()
  @ApiProperty({
    default: 6000,
    description:
      'The timeout in milliseconds for establishing a connection to the upstream server. Defaults to 60000.',
  })
  readonly connect_timeout: number;
  @ApiPropertyOptional()
  @ApiProperty({
    default: 6000,
    description:
      'The timeout in milliseconds between two successive write operations for transmitting a request to the upstream server. Defaults to 60000.',
  })
  readonly write_timeout: number;
  @ApiPropertyOptional()
  @ApiProperty({
    default: 6000,
    description:
      'The timeout in milliseconds between two successive read operations for transmitting a request to the upstream server. Defaults to 60000.',
  })
  readonly read_timeout: number;
}
