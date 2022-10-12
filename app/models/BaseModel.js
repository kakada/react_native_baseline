import realm from '../db/schema';

class BaseModel {
  static seedData = (model, items) => {
    realm.write(() => {
      items.map(item => {
        if (!this.findByUuid(model, item.uuid))
          realm.create(model, item);
      });
    });
  }

  static getAll = (model) => {
    return realm.objects(model);
  }

  static findByUuid = (model, uuid) => {
    return realm.objects(model).filtered(`uuid = '${uuid}'`)[0];
  }

  // Params example: ('User', {parent_code: null, display: `'row_card'`}, 'AND', {type: 'ASC', column: 'order'})
  static findByAttr = (model, attr, operator = '', sortAttr = {}) => {
    const columns = Object.keys(attr);
    let query = '';
    columns.map((column, index) => {
      query += `${column} = ${attr[column]} ${index < columns.length - 1 ? `${operator} ` : ''}`;
    });

    if(!!sortAttr.type)
      query += `SORT(${sortAttr.column} ${sortAttr.type})`

    return realm.objects(model).filtered(query);
  }

  static create = (model, data) => {
    realm.write(() => {
      realm.create(model, data);
    });
  }

  static update = (model, uuid, data) => {
    realm.write(() => {
      realm.create(model, Object.assign(data, { uuid: uuid }), 'modified');
    });
  }

  static deleteByUuid = (model, uuid) => {
    const item = this.findByUuid(model, uuid);
    if (!!item) {
      realm.write(() => {
        realm.delete(item);
      });
    }
  }
}

export default BaseModel;