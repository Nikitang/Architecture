declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

// declare module '*scss' {
//     const content: any;
//     export default content;
// }

// declare module '*.module.scss' {
//     const classes: { [key: string]: string };
//     export default classes;
// }
