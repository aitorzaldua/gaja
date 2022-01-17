
import { Orchestrator } from "@holochain/tryorama";

import zome_001 from './dna_gaja/zome_001';

let orchestrator: Orchestrator<any>;

orchestrator = new Orchestrator();
zome_001(orchestrator);
orchestrator.run();



