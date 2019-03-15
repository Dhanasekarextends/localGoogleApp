import Realm from "realm";
import React from "react";

export default class UserDatabase extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({
      path: "UserDatabase.realm",
      schema: [
        {
          name: "user_details",
          properties: {
            user_id: { type: "int", default: 0 },
            user_name: "string",
            user_mail_id: "string",
            user_password: "string"
          }
        }
      ]
    });
  }
}
