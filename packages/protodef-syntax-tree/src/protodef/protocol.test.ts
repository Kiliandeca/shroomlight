import { expectType } from 'tsd';
import { Protocol } from './protocol';

describe('Check type from protoodef doc example matches', () => {

  it('Buffer', () => {
    const data = {
      "types": {
        "pstring": "native",
        "varint": "native"
      },
      "namespace1": {
        "types": {
          "mytype": [
            "pstring",
            "varint"
          ]
        },
        "namespace2": {
          "packet": "mytype"
        }
      }
    }
    expectType<Protocol>(data)
  });

});
