import { initialize } from 'zokrates-js';

export default async function zokrates_hash(s, r) {
  const hash = initialize().then((zokratesProvider) => {
    // const code = 'import "hashes/sha256/512bitPacked" as sha256packed\n def main(private field s, private field r) -> field:\n field[2] h = sha256packed([0, 0, s, r])\n return h[1]';
    
    const code = 'import "hashes/sha256/512bitPacked" as sha256packed; \n def main(private field s, private field r) -> field {\n field[2] h = sha256packed([0, 0, s, r]); \n return h[1];\n }';

    const artifacts = zokratesProvider.compile(code);
    const { witness, output } = zokratesProvider.computeWitness(artifacts, [s, r]);
    return output;
  });
  return hash;
}

