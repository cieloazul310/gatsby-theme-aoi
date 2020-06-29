import * as React from 'react';
import renderer from 'react-test-renderer';
import { faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import FabIcon from '../FabIcon';

describe('FabIcon', () => {
  it('TwitterIcon', () => {
    const tree = renderer.create(<FabIcon icon={faTwitter} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Large Icon', () => {
    const tree = renderer.create(<FabIcon icon={faTwitter} fontSize="large" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('default vertical', () => {
    const tree = renderer.create(<FabIcon icon={faTwitter} defaultVertical={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('disable default vertical', () => {
    const tree = renderer.create(<FabIcon icon={faTwitter} defaultVertical={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Wide Icon', () => {
    const tree = renderer.create(<FabIcon icon={faYoutubeSquare} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
