declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
}

declare module "react" {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        className?: string;
    }
} 