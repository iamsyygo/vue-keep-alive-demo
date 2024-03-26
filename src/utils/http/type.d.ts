export type AxiosResponseResult<T> = {
  code: number;
  bizdata: T;
  message: string;
  success: boolean;
  timestamp: number;
};

export enum ERequestErrorStatusCode {
  '请求失败' = 400,
  '未授权，请登录' = 401,
  '拒绝访问' = 403,
  '请求地址出错' = 404,
  '请求方法未允许' = 405,
  '请求的格式不可得' = 406,
  '请求被代理拒绝' = 407,
  '请求超时' = 408,
  '请求资源与服务器状态冲突' = 409,
  '请求资源被永久删除' = 410,
  '请求资源长度未定义' = 411,
  '请求资源体积太大' = 413,
  '请求资源URL太长' = 414,
  '请求资源不支持请求项目格式' = 415,
  '请求次数超过限制' = 429,
  '服务器错误' = 500,
  '服务未实现' = 501,
  '网关错误' = 502,
  '服务不可用' = 503,
  '网关超时' = 504,
  'HTTP版本不受支持' = 505,
  '服务器内部配置错误' = 506,
  '服务器无法存储完成请求所需存储的内容' = 507,
}