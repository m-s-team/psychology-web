export class BarrettTest {
  constructor(
    public id: number,
    public createdDate: Date,
    public visualReasoningSubtest: Subtest,
    public numericalReasoningSubtest: Subtest,
    public verbalAnalysisSubtest: Subtest,
    public sequentialReasoningSubtest: Subtest,
    public spatialRecognitionSubtest: Subtest,
    public threeDSubtest: Subtest
  ) {
  }
}

class Subtest {
  constructor(
    public createdDate: Date,
    public requiredTime: number,
    public completedDate: Date
  ) {
  }
}
