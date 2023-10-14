import * as SQLite from "expo-sqlite";

export const getAllProducts = (
  db: SQLite.WebSQLDatabase,
  setProducts: React.Dispatch<React.SetStateAction<any[]>>
) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM productos",
      null,
      (txObj, resultSet) => {
        console.log("GET success", resultSet.rows._array);
        setProducts(resultSet.rows._array);
      },
      (txObj, error) => {
        console.log("error", error);
        return true;
      }
    );
  });
};

export const getProductByName = (
  db: SQLite.WebSQLDatabase,
  params: any[],
  setProducts: React.Dispatch<React.SetStateAction<any[]>>
) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM productos WHERE UPPER(name) LIKE ?",
      [`%${params[0]}%`],
      (txObj, resultSet) => {
        console.log("GET by name success", resultSet.rows._array);
        setProducts(resultSet.rows._array);
      },
      (txObj, error) => {
        console.log("error", error);
        return true;
      }
    );
  });
};

export const createProduct = (db: SQLite.WebSQLDatabase, params: any[]) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO productos (name, categoria) values (?, ?)",
      params,
      (txObj, resultSet) =>
        console.log("value created success", txObj, resultSet),
      (txObj, error) => {
        console.log("error", error);
        return true;
      }
    );
  });
};

export const deleteProduct = (db: SQLite.WebSQLDatabase, params: any[]) => {
  db.transaction((tx) => {
    tx.executeSql(
      "DELETE FROM productos WHERE id = ?",
      params,
      (txObj, resultSet) =>
        console.log("value delete successfully", txObj, resultSet),
      (txObj, error) => {
        console.log("error", error);
        return true;
      }
    );
  });
};

export const getAllCategories = (
  db: SQLite.WebSQLDatabase,
  setCategories: React.Dispatch<React.SetStateAction<any[]>>
) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM categorias",
      null,
      (txObj, resultSet) => {
        console.log("GET success", resultSet.rows._array);
        setCategories(resultSet.rows._array);
      },
      (txObj, error) => {
        console.log("error", error);
        return true;
      }
    );
  });
};

export const createCategory = (db: SQLite.WebSQLDatabase, params: any[]) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO categorias (name) values (?)",
      params,
      (txObj, resultSet) =>
        console.log("value created success", txObj, resultSet),
      (txObj, error) => {
        console.log("error", error);
        return true;
      }
    );
  });
};

export const deleteCategory = (db: SQLite.WebSQLDatabase, params: any[]) => {
  db.transaction((tx) => {
    tx.executeSql(
      "DELETE FROM categorias WHERE id = ?",
      params,
      (txObj, resultSet) =>
        console.log("value delete successfully", txObj, resultSet),
      (txObj, error) => {
        console.log("error", error);
        return true;
      }
    );
  });
};
