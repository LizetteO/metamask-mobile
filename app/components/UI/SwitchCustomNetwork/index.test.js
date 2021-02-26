import React from 'react';
import SwitchCustomNetwork from '.';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { ROPSTEN } from '../../../constants/network';

const mockStore = configureMockStore();

describe('SwitchCustomNetwork', () => {
	it('should render correctly', () => {
		const initialState = {
			engine: {
				backgroundState: {
					AccountTrackerController: {
						accounts: { '0x2': { balance: '0' } }
					},
					NetworkController: {
						provider: {
							type: ROPSTEN
						}
					},
					AssetsController: {
						tokens: []
					},
					PreferencesController: {
						selectedAddress: '0xe7E125654064EEa56229f273dA586F10DF96B0a1',
						identities: { '0xe7E125654064EEa56229f273dA586F10DF96B0a1': { name: 'Account 1' } }
					}
				}
			}
		};

		const wrapper = shallow(<SwitchCustomNetwork currentPageInformation={{ icon: '', url: '', title: '' }} />, {
			context: { store: mockStore(initialState) }
		});
		expect(wrapper.dive()).toMatchSnapshot();
	});
});
