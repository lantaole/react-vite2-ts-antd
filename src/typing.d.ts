// global typing

// 定义 less-vars-to-js 解决无类型提示问题
declare module 'less-vars-to-js';
declare module '*.less' {
  const resource: {[key: string]: string};
  export = resource;
}


interface ImportMetaEnv {
  readonly VITE_TITLE: string;
  readonly VITE_API_URL: string;
  readonly VITE_LOCATION_ORIGIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}



