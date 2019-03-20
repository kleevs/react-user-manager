export default class AjaxService {
    get<T>(url: string): Promise<T> { return Promise.resolve(null); }
    put<TIn, TOut>(url: string, body: TIn): Promise<TOut> { return Promise.resolve(null); }
    post<TIn, TOut>(url: string, body: TIn): Promise<TOut> { return Promise.resolve(null); }
    delete<T>(url: string): Promise<T> { return Promise.resolve(null); }
}