/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { PayableOverrides } from "../common";
import type { Swisstronik, SwisstronikInterface } from "../Swisstronik";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getMessage",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "setMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260405162000be438038062000be48339818101604052810190620000299190620001d5565b80600090816200003a919062000471565b505062000558565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000ab8262000060565b810181811067ffffffffffffffff82111715620000cd57620000cc62000071565b5b80604052505050565b6000620000e262000042565b9050620000f08282620000a0565b919050565b600067ffffffffffffffff82111562000113576200011262000071565b5b6200011e8262000060565b9050602081019050919050565b60005b838110156200014b5780820151818401526020810190506200012e565b60008484015250505050565b60006200016e6200016884620000f5565b620000d6565b9050828152602081018484840111156200018d576200018c6200005b565b5b6200019a8482856200012b565b509392505050565b600082601f830112620001ba57620001b962000056565b5b8151620001cc84826020860162000157565b91505092915050565b600060208284031215620001ee57620001ed6200004c565b5b600082015167ffffffffffffffff8111156200020f576200020e62000051565b5b6200021d84828501620001a2565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200027957607f821691505b6020821081036200028f576200028e62000231565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002f97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620002ba565b620003058683620002ba565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003526200034c62000346846200031d565b62000327565b6200031d565b9050919050565b6000819050919050565b6200036e8362000331565b620003866200037d8262000359565b848454620002c7565b825550505050565b600090565b6200039d6200038e565b620003aa81848462000363565b505050565b5b81811015620003d257620003c660008262000393565b600181019050620003b0565b5050565b601f8211156200042157620003eb8162000295565b620003f684620002aa565b8101602085101562000406578190505b6200041e6200041585620002aa565b830182620003af565b50505b505050565b600082821c905092915050565b6000620004466000198460080262000426565b1980831691505092915050565b600062000461838362000433565b9150826002028217905092915050565b6200047c8262000226565b67ffffffffffffffff81111562000498576200049762000071565b5b620004a4825462000260565b620004b1828285620003d6565b600060209050601f831160018114620004e95760008415620004d4578287015190505b620004e0858262000453565b86555062000550565b601f198416620004f98662000295565b60005b828110156200052357848901518255600182019150602085019450602081019050620004fc565b868310156200054357848901516200053f601f89168262000433565b8355505b6001600288020188555050505b505050505050565b61067c80620005686000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063368b87721461003b578063ce6d41de14610057575b600080fd5b61005560048036038101906100509190610274565b610075565b005b61005f610088565b60405161006c919061033c565b60405180910390f35b80600090816100849190610574565b5050565b6060600080546100979061038d565b80601f01602080910402602001604051908101604052809291908181526020018280546100c39061038d565b80156101105780601f106100e557610100808354040283529160200191610110565b820191906000526020600020905b8154815290600101906020018083116100f357829003601f168201915b5050505050905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61018182610138565b810181811067ffffffffffffffff821117156101a05761019f610149565b5b80604052505050565b60006101b361011a565b90506101bf8282610178565b919050565b600067ffffffffffffffff8211156101df576101de610149565b5b6101e882610138565b9050602081019050919050565b82818337600083830152505050565b6000610217610212846101c4565b6101a9565b90508281526020810184848401111561023357610232610133565b5b61023e8482856101f5565b509392505050565b600082601f83011261025b5761025a61012e565b5b813561026b848260208601610204565b91505092915050565b60006020828403121561028a57610289610124565b5b600082013567ffffffffffffffff8111156102a8576102a7610129565b5b6102b484828501610246565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156102f75780820151818401526020810190506102dc565b60008484015250505050565b600061030e826102bd565b61031881856102c8565b93506103288185602086016102d9565b61033181610138565b840191505092915050565b600060208201905081810360008301526103568184610303565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806103a557607f821691505b6020821081036103b8576103b761035e565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026104207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826103e3565b61042a86836103e3565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061047161046c61046784610442565b61044c565b610442565b9050919050565b6000819050919050565b61048b83610456565b61049f61049782610478565b8484546103f0565b825550505050565b600090565b6104b46104a7565b6104bf818484610482565b505050565b5b818110156104e3576104d86000826104ac565b6001810190506104c5565b5050565b601f821115610528576104f9816103be565b610502846103d3565b81016020851015610511578190505b61052561051d856103d3565b8301826104c4565b50505b505050565b600082821c905092915050565b600061054b6000198460080261052d565b1980831691505092915050565b6000610564838361053a565b9150826002028217905092915050565b61057d826102bd565b67ffffffffffffffff81111561059657610595610149565b5b6105a0825461038d565b6105ab8282856104e7565b600060209050601f8311600181146105de57600084156105cc578287015190505b6105d68582610558565b86555061063e565b601f1984166105ec866103be565b60005b82811015610614578489015182556001820191506020850194506020810190506105ef565b86831015610631578489015161062d601f89168261053a565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220692bfdea1cb5b31ff068e93bcb084340183779856cd2f1cdb9dbee4daff2cad764736f6c63430008130033";

type SwisstronikConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwisstronikConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Swisstronik__factory extends ContractFactory {
  constructor(...args: SwisstronikConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _message: string,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_message, overrides || {});
  }
  override deploy(
    _message: string,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_message, overrides || {}) as Promise<
      Swisstronik & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Swisstronik__factory {
    return super.connect(runner) as Swisstronik__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwisstronikInterface {
    return new Interface(_abi) as SwisstronikInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Swisstronik {
    return new Contract(address, _abi, runner) as unknown as Swisstronik;
  }
}
