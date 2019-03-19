export const Component = <T>(reactComponent: (obj: T) => any) => (target: new(props: any)=>T) => {
    return <any>((props) => {
        return reactComponent(new target(props));
    })
}
