import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should render a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a textarea that the user can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('when form is submitted textarea is emptied', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });
  wrapped.update();

  wrapped.find('form').simulate('submit');
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
