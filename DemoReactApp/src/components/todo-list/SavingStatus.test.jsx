import React from 'react';
import renderer from 'react-test-renderer';
import { SavingStatus } from './SavingStatus';

test('shows spinner when saving in progress', () => {
    const component = renderer.create(
        <SavingStatus
            watchedEntity={{}}
            isSaving={true}
            save={() => { /* do nothing */
            }}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});