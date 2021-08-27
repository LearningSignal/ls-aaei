import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyMCE = (props) => {
    const editorRef = useRef(null);

    return (
        <>
            <Editor
                apiKey="9nl2qho2tsix9aff1fsuj07zsvbssq517gduivkkq7b0v7ag"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p></p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                        "undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
                value={props.value}
                onEditorChange={props.onChange}
            />
        </>
    );
};

export default TinyMCE;
