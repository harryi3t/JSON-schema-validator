import React from "react";
import { render } from "react-dom";
import Editor from "../components/Editor";
import Select from "react-select";
import schemas from "../schema-files/index";

export default class Main extends React.Component {
  constructor() {
    super();

    this.onSchemaOptionChange = this.onSchemaOptionChange.bind(this);
    this.onInputJsonChange = this.onInputJsonChange.bind(this);

    this.state = {
      schema: "",
      inputJson: "",
      options: [
        { value: "schema-draft-v7", label: "Schema Draft v7" },
        { value: "schema-draft-v3", label: "Schema Draft v3" }
      ]
    };
  }

  componentDidMount() {
    this.onSchemaOptionChange(this.state.options[0]);
  }

  onSchemaOptionChange(selectedOption) {
    let schema = schemas[selectedOption.value];
    schema && this.setState({ schema: JSON.stringify(schema, null, 2) });
  }

  onInputJsonChange(editor, data, value) {
    this.setState({ inputJson: value });
  }

  render() {
    return (
      <div className="main-container">
        <div className="pane pane-schema">
          <div className="pane-header">
            <div>Schema</div>
            <Select
              options={this.state.options}
              defaultValue={this.state.options[0]}
              onSchemaOptionChange={this.onSchemaOptionChange}
            />
          </div>
          <div className="pane-content">
            <Editor content={this.state.schema} />
          </div>
        </div>
        <div className="pane pane-input-json">
          <div className="pane-header">
            <div>Input JSON</div>
          </div>
          <div className="pane-content">
            <Editor
              content={this.state.inputJson}
              onChange={this.onInputJsonChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
