import { Test, TestingModule } from '@nestjs/testing';
import { GeneralParameterResolver } from './general-parameter.resolver';


describe('GeneralParameterResolver', () => {
  let resolver: GeneralParameterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralParameterResolver],
    }).compile();

    resolver = module.get<GeneralParameterResolver>(GeneralParameterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
