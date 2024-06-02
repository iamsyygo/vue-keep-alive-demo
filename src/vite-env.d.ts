/// <reference types="vite/client" />

// https://www.cnblogs.com/maurrinho/p/17777662.html
type GenericComponentExports<D extends (...p: any[]) => any> =
  import('vue').ComponentPublicInstance &
    Parameters<NonNullable<NonNullable<ReturnType<D>['__ctx']>['expose']>>[0];
