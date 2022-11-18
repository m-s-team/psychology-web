export class VisualReasoning {
  constructor(
    public createdDate: Date,
    public completedDate: Date,
    public requiredTime: number,
    public tests: Test[]
  ) {
  }
}

class Test {
  constructor(
    public id: number,
    public type: VisualReasoningTestType,
    public question: string,
    public imageUrl: string,
    public optionImageUrls: string[],
    public userAnswer: number
  ) {
  }
}

export enum VisualReasoningTestType {
  Odd = "Odd",
  Nest = "Next"
}
