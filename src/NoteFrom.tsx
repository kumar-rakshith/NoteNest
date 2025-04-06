import { FormEvent, useRef } from "react";
import { Form, Row, Stack, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";

import { NoteData } from "./App";

type NoteFromProps = {
  onSubmit: (data: NoteData) => void;
};

export function NoteFrom({ onSubmit }: NoteFromProps) {
  const tittleRef = useRef<HTMLInputElement>(null);
  const markDown = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title: tittleRef.current!.value,
      markDown: markDown.current!.value,
      tags: [],
    });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="tittle">
              <Form.Label>Tittle</Form.Label>
              <Form.Control ref={tittleRef} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
               value={selectedTags.map(tag => {
                return { label: tag.label, value: tag.id }
              })}
              onChange={tags => {
                setSelectedTags(
                  tags.map(tag => {
                    return { label: tag.label, id: tag.value }
                  })
                )
              }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="Markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" ref={markDown} rows={15} />
        </Form.Group>
      </Stack>

      <Stack direction="horizontal" gap={2} className="justify-content-end">
        <Button type="submit" variant="primary">
          SAVE
        </Button>
        <Link to="..">
          <Button type="button" variant="outline-secondary">
            CLOSE
          </Button>
        </Link>
      </Stack>
    </Form>
  );
}
