declare module '*.svg' {
  export default React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module '*.jpg' {
  export default string;
}
