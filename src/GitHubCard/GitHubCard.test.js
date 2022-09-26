import { render, screen } from '@testing-library/react';
import GithubCard from './GitHubCard';
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
  const tree = renderer.create(<GithubCard/>).toJSON()
  expect(tree).toMatchSnapshot()
})