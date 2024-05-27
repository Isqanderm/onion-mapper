import { DefaultValues, MappingConfiguration, MappingResult } from "./interface";
export declare class Mapper<Source, Target> {
    private readonly transformFunction;
    private readonly defaultValues?;
    constructor(mappingConfig: MappingConfiguration<Source, Target>, defaultValues?: DefaultValues<Target>);
    private getValueByPath;
    private get defValues();
    private createCompiler;
    private compile;
    execute(source: Source): MappingResult<Target>;
}
//# sourceMappingURL=Mapper.d.ts.map