export class DependencyInjection {
    private dependency:Map<any,any> 
    constructor(){
    this.dependency = new Map()
    }

    registryDependency<T>(key:Function, dependency:T){
        this.dependency.set(key, dependency)
    } 
    
    getDependency<T>(key:Function):T{
        return this.dependency.get(key)
    }
}