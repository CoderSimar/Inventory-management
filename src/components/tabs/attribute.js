import React from 'react';
import '../../assets/css/tabs-css/attribute.scss';
class Attribute extends React.Component {
  render() {
    return (
      <div className="attribute-main">
        <button type="button" class="btn btn-primary group-button btn-raised">
          <i class="fas fa-plus-square" style={{ marginRight: 5 }} />
          Add Attr
        </button>
        <form action="" class="navbar-form navbar-right search-form">
          <div class="input-group">
            <input type="Search" placeholder="Search..." class="form-control" />
          </div>
        </form>
        <select class="browser-default custom-select select-position">
          <option selected>10</option>
          <option value="1">15</option>
          <option value="2">20</option>
          <option value="3">50</option>
        </select>

        <table
          id="dtBasicExample"
          class="table table-striped table-bordered table-add-group"
          cellspacing="0"
          width="100%"
        >
          <thead class="thead-dark">
            <tr>
              <th class="th-sm">Attribute</th>
              <th class="th-sm">Status</th>
              <th class="th-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>White</td>
              <td>Active</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary btn-xs btn-edit-del center-block"
                >
                  <i class="fas fa-edit" />
                </button>
                <button
                  type="button"
                  class="btn btn-danger btn-xs btn-edit-del"
                >
                  <i class="fas fa-trash-alt" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Blue</td>
              <td>Active</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary btn-xs btn-edit-del"
                >
                  <i class="fas fa-edit" />
                </button>
                <button
                  type="button"
                  class="btn btn-danger btn-xs btn-edit-del"
                >
                  <i class="fas fa-trash-alt" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Green</td>
              <td>Active</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary btn-xs btn-edit-del"
                >
                  <i class="fas fa-edit" />
                </button>
                <button
                  type="button"
                  class="btn btn-danger btn-xs btn-edit-del"
                >
                  <i class="fas fa-trash-alt" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Attribute;
