import { FC, useEffect, useRef } from "react";
import style from "./../styles/cms/_form.module.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";

const TextEditor: FC<any> = ({ onchange, data }) => {
  return (
    <div className={style.textEditor}>
      <CKEditor
        data={data}
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          onchange((input: any) => {
            return { ...input, desc: data };
          });
        }}
      />
    </div>
  );
};

export default TextEditor;

/** uninstall
 * cheditor
 * @ckeditor/ckeditor5-inspector
 */
