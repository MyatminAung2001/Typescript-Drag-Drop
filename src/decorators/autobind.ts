// Autobind Decorator
export const Autobind = (_: any, _2: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFun = originalMethod.bind(this);            
            return boundFun;
        },
    };
    return adjDescriptor;
}