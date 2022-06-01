// Mẫu file gọi api

import {instance} from '../instance';

// URL OF API
const url: string = '/api/ExamTopic/';
const example = {
  // GET ALL DATA
  getAll(params: any) {
    return instance.get<IApiResult<any[]>>(url, {
      params,
    });
  },
  // GET DATA BY ID
  getByID(ID: number) {
    return instance.get<IApiResult<any>>(`${url}${ID}`);
  },
  // CREACTE NEW DATA
  add(data: object) {
    return instance.post(url, data);
  },
  // UPDATE DATA
  update(data: object) {
    return instance.put(url, data);
  },
  // DELETE DATA
  delete(data: any) {
    return instance.put(url, data);
  },
};

export {example};
