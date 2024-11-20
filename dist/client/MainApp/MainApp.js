const runtimeUrl = window.elementoRuntimeUrl || 'https://elemento.online/lib/runtime.js'
const Elemento = await import(runtimeUrl)
const {React, trace, elProps, stateProps, wrapFn} = Elemento

// MainPage.js
const MainPage_NumbersItemSetItem = React.memo(function MainPage_NumbersItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const RoundInPlay = _state.useObject(parentPathWith('RoundInPlay'))
    const canDragItem = RoundInPlay
    const styles = undefined

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(TextElement, elProps(pathTo('NumText')).styles(elProps(pathTo('NumText.Styles')).fontSize('26').border('2px solid blue').borderRadius('10').textAlign('center').height('36').width('1.5em').props).content($item).props),
    )
})


const MainPage_OperationsItemSetItem = React.memo(function MainPage_OperationsItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const RoundInPlay = _state.useObject(parentPathWith('RoundInPlay'))
    const canDragItem = RoundInPlay
    const styles = undefined

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(TextElement, elProps(pathTo('OpText')).styles(elProps(pathTo('OpText.Styles')).fontSize('26').width('1.5em').border('2px solid green').borderRadius('10').textAlign('center').height('36').props).content($item).props),
    )
})


const MainPage_Num1ItemSetItem = React.memo(function MainPage_Num1ItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const RoundInPlay = _state.useObject(parentPathWith('RoundInPlay'))
    const canDragItem = RoundInPlay
    const styles = undefined

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(TextElement, elProps(pathTo('Num1Text')).styles(elProps(pathTo('Num1Text.Styles')).fontSize('26').width('40').border('2px solid blue').borderRadius('10').textAlign('center').height('36').props).content($item).props),
    )
})


const MainPage_Op1ItemSetItem = React.memo(function MainPage_Op1ItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const RoundInPlay = _state.useObject(parentPathWith('RoundInPlay'))
    const canDragItem = RoundInPlay
    const styles = undefined

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(TextElement, elProps(pathTo('Op1Text')).styles(elProps(pathTo('Op1Text.Styles')).fontSize('26').width('40').border('2px solid green').borderRadius('10').textAlign('center').height('36').props).content($item).props),
    )
})


const MainPage_Num2ItemSetItem = React.memo(function MainPage_Num2ItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const RoundInPlay = _state.useObject(parentPathWith('RoundInPlay'))
    const canDragItem = RoundInPlay
    const styles = undefined

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(TextElement, elProps(pathTo('Num2Text')).styles(elProps(pathTo('Num2Text.Styles')).fontSize('26').width('40').border('2px solid blue').borderRadius('10').textAlign('center').height('36').props).content($item).props),
    )
})


const MainPage_Op2ItemSetItem = React.memo(function MainPage_Op2ItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const RoundInPlay = _state.useObject(parentPathWith('RoundInPlay'))
    const canDragItem = RoundInPlay
    const styles = undefined

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(TextElement, elProps(pathTo('Op2Text')).styles(elProps(pathTo('Op2Text.Styles')).fontSize('26').width('40').border('2px solid green').borderRadius('10').textAlign('center').height('36').props).content($item).props),
    )
})


const MainPage_Num3ItemSetItem = React.memo(function MainPage_Num3ItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const RoundInPlay = _state.useObject(parentPathWith('RoundInPlay'))
    const canDragItem = RoundInPlay
    const styles = undefined

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(TextElement, elProps(pathTo('Num3Text')).styles(elProps(pathTo('Num3Text.Styles')).fontSize('26').width('40').border('2px solid blue').borderRadius('10').textAlign('center').height('36').props).content($item).props),
    )
})


const MainPage_Op3ItemSetItem = React.memo(function MainPage_Op3ItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const RoundInPlay = _state.useObject(parentPathWith('RoundInPlay'))
    const canDragItem = RoundInPlay
    const styles = undefined

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(TextElement, elProps(pathTo('Op3Text')).styles(elProps(pathTo('Op3Text.Styles')).fontSize('26').width('40').border('2px solid green').borderRadius('10').textAlign('center').height('36').props).content($item).props),
    )
})


const MainPage_Num4ItemSetItem = React.memo(function MainPage_Num4ItemSetItem(props) {
    const pathTo = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item, $itemId, $index, $selected, onClick} = props
    const {ItemSetItem, TextElement} = Elemento.components
    const _state = Elemento.useGetStore()
    const RoundInPlay = _state.useObject(parentPathWith('RoundInPlay'))
    const canDragItem = RoundInPlay
    const styles = undefined

    return React.createElement(ItemSetItem, {path: props.path, item: $item, itemId: $itemId, index: $index, onClick, canDragItem, styles},
        React.createElement(TextElement, elProps(pathTo('Num4Text')).styles(elProps(pathTo('Num4Text.Styles')).fontSize('26').width('40').border('2px solid blue').borderRadius('10').textAlign('center').height('36').props).content($item).props),
    )
})


function MainPage(props) {
    const pathTo = name => props.path + '.' + name
    const {Page, Data, Calculation, Timer, TextElement, Dialog, Button, Block, ItemSet} = Elemento.components
    const {And, Or, Eq, Not, If, NotNull, Max, RandomListFrom, Range, Shuffle, ItemAt, Record, WithoutItems, IsNull, ListContains, Ceiling} = Elemento.globalFunctions
    const {Set, Reset} = Elemento.appFunctions
    const _state = Elemento.useGetStore()
    const app = _state.useObject('MainApp')
    const {SendMessage, CurrentUrl} = app
    const Status = _state.setObject(pathTo('Status'), new Data.State(stateProps(pathTo('Status')).value('Ready').props))
    const Score = _state.setObject(pathTo('Score'), new Data.State(stateProps(pathTo('Score')).value(0).props))
    const RoundSkipped = _state.setObject(pathTo('RoundSkipped'), new Data.State(stateProps(pathTo('RoundSkipped')).value(false).props))
    const PointsThreshold = _state.setObject(pathTo('PointsThreshold'), new Calculation.State(stateProps(pathTo('PointsThreshold')).value(20).props))
    const Bonus = _state.setObject(pathTo('Bonus'), new Calculation.State(stateProps(pathTo('Bonus')).value(30).props))
    const PointsFactor = _state.setObject(pathTo('PointsFactor'), new Calculation.State(stateProps(pathTo('PointsFactor')).value(1).props))
    const GameRunning = _state.setObject(pathTo('GameRunning'), new Calculation.State(stateProps(pathTo('GameRunning')).value(Or(Status == 'Playing', Status == 'Paused')).props))
    const SendScore = _state.setObject(pathTo('SendScore'), React.useCallback(wrapFn(pathTo('SendScore'), 'calculation', (score) => {
        return SendMessage('parent', Record('score', Score, 'url', CurrentUrl().text))
    }), [Score]))
    const EndGame = _state.setObject(pathTo('EndGame'), React.useCallback(wrapFn(pathTo('EndGame'), 'calculation', () => {
        Set(Status, 'Ended')
        return SendScore(Score)
    }), [Status, SendScore, Score]))
    const GameTimer_endAction = React.useCallback(wrapFn(pathTo('GameTimer'), 'endAction', async ($timer) => {
        await EndGame()
    }), [EndGame])
    const GameTimer = _state.setObject(pathTo('GameTimer'), new Timer.State(stateProps(pathTo('GameTimer')).period(180).interval(1).endAction(GameTimer_endAction).props))
    const PauseGame = _state.setObject(pathTo('PauseGame'), React.useCallback(wrapFn(pathTo('PauseGame'), 'calculation', () => {
        Set(Status, 'Paused')
        return GameTimer.Stop()
    }), [Status, GameTimer]))
    const ContinueGame = _state.setObject(pathTo('ContinueGame'), React.useCallback(wrapFn(pathTo('ContinueGame'), 'calculation', () => {
        Set(Status, 'Playing')
        return GameTimer.Start()
    }), [Status, GameTimer]))
    const CorrectNumbers = _state.setObject(pathTo('CorrectNumbers'), new Data.State(stateProps(pathTo('CorrectNumbers')).props))
    const CorrectOperations = _state.setObject(pathTo('CorrectOperations'), new Data.State(stateProps(pathTo('CorrectOperations')).props))
    const Numbers = _state.setObject(pathTo('Numbers'), new Data.State(stateProps(pathTo('Numbers')).props))
    const Operations = _state.setObject(pathTo('Operations'), new Data.State(stateProps(pathTo('Operations')).props))
    const Num1 = _state.setObject(pathTo('Num1'), new Data.State(stateProps(pathTo('Num1')).props))
    const Num2 = _state.setObject(pathTo('Num2'), new Data.State(stateProps(pathTo('Num2')).props))
    const Num3 = _state.setObject(pathTo('Num3'), new Data.State(stateProps(pathTo('Num3')).props))
    const Num4 = _state.setObject(pathTo('Num4'), new Data.State(stateProps(pathTo('Num4')).props))
    const NumbersAvailable = _state.setObject(pathTo('NumbersAvailable'), new Calculation.State(stateProps(pathTo('NumbersAvailable')).value(WithoutItems(Numbers, Num1, Num2, Num3, Num4)).props))
    const Op1 = _state.setObject(pathTo('Op1'), new Data.State(stateProps(pathTo('Op1')).props))
    const Op2 = _state.setObject(pathTo('Op2'), new Data.State(stateProps(pathTo('Op2')).props))
    const Op3 = _state.setObject(pathTo('Op3'), new Data.State(stateProps(pathTo('Op3')).props))
    const OperationsAvailable = _state.setObject(pathTo('OperationsAvailable'), new Calculation.State(stateProps(pathTo('OperationsAvailable')).value(WithoutItems(Operations, Op1, Op2, Op3)).props))
    const Target = _state.setObject(pathTo('Target'), new Data.State(stateProps(pathTo('Target')).value('').props))
    const PointsScored = _state.setObject(pathTo('PointsScored'), new Data.State(stateProps(pathTo('PointsScored')).value(0).props))
    const IsRoundWon = _state.setObject(pathTo('IsRoundWon'), new Calculation.State(stateProps(pathTo('IsRoundWon')).value(PointsScored > 0).props))
    const ResultExact = _state.setObject(pathTo('ResultExact'), new Data.State(stateProps(pathTo('ResultExact')).value(false).props))
    const IsRoundExact = _state.setObject(pathTo('IsRoundExact'), new Calculation.State(stateProps(pathTo('IsRoundExact')).value(ResultExact).props))
    const Calc = _state.setObject(pathTo('Calc'), React.useCallback(wrapFn(pathTo('Calc'), 'calculation', (a, op, b) => {
        return If(Or(IsNull(a), IsNull(b)), null, () => If(op == '+', () => a + b, () => If(op == '-', () => a - b, () => If(op == 'x', () => a * b, null))))
    }), []))
    const SetupNewRound = _state.setObject(pathTo('SetupNewRound'), React.useCallback(wrapFn(pathTo('SetupNewRound'), 'calculation', () => {
        let numbers = RandomListFrom(Range(3, 12), 4)
        let ops = Shuffle(['+', '-', 'x'])
        let op1 = ops[0], op2 = ops[1], op3 = ops[2]
        let num1 = numbers[0], num2 = numbers[1], num3 = numbers[2], num4 = numbers[3]
        let result1 = Calc(num1, op1, num2)
        let result2 = Calc(result1, op2, num3)
        let result3 = Calc(result2, op3, num4)
        Set(CorrectNumbers, numbers)
        Set(CorrectOperations, ops)
        Set(Operations, Shuffle(ops))
        Set(Numbers, Shuffle(numbers))
        Set(Target, result3)
        Reset(Num1, Num2, Num3, Num4)
        Reset(Op1, Op2, Op3)
        return Reset(PointsScored, ResultExact)
    }), [Calc, CorrectNumbers, CorrectOperations, Operations, Numbers, Target, Num1, Num2, Num3, Num4, Op1, Op2, Op3, PointsScored, ResultExact]))
    const StartNewRound = _state.setObject(pathTo('StartNewRound'), React.useCallback(wrapFn(pathTo('StartNewRound'), 'calculation', () => {
        Reset(RoundSkipped)
        return SetupNewRound()
    }), [RoundSkipped, SetupNewRound]))
    const StartNewGame = _state.setObject(pathTo('StartNewGame'), React.useCallback(wrapFn(pathTo('StartNewGame'), 'calculation', () => {
        Reset(Score)
        Reset(GameTimer)
        Set(Status, 'Playing')
        StartNewRound()
        return GameTimer.Start()
    }), [Score, GameTimer, Status, StartNewRound]))
    const Result1 = _state.setObject(pathTo('Result1'), new Calculation.State(stateProps(pathTo('Result1')).value(Calc(Num1, Op1, Num2)).props))
    const Result2 = _state.setObject(pathTo('Result2'), new Calculation.State(stateProps(pathTo('Result2')).value(Calc(Result1, Op2, Num3)).props))
    const Result3 = _state.setObject(pathTo('Result3'), new Calculation.State(stateProps(pathTo('Result3')).value(Calc(Result2, Op3, Num4)).props))
    const Result = _state.setObject(pathTo('Result'), new Calculation.State(stateProps(pathTo('Result')).value(If(NotNull(Result3), Result3)).props))
    const IsRoundComplete = _state.setObject(pathTo('IsRoundComplete'), new Calculation.State(stateProps(pathTo('IsRoundComplete')).value(Or(Eq(Target, Result), RoundSkipped, Not(GameRunning))).props))
    const IsRoundFailed = _state.setObject(pathTo('IsRoundFailed'), new Calculation.State(stateProps(pathTo('IsRoundFailed')).value(And(IsRoundComplete, PointsScored == 0)).props))
    const RoundInPlay = _state.setObject(pathTo('RoundInPlay'), new Calculation.State(stateProps(pathTo('RoundInPlay')).value(Not(IsRoundComplete)).props))
    const Points = _state.setObject(pathTo('Points'), React.useCallback(wrapFn(pathTo('Points'), 'calculation', () => {
        let gap = Math.abs(Target - Result)
        let bonus = If(Eq(Target, Result), Bonus, 0)
        let res = If(NotNull(Result), () => Max(0, (PointsThreshold - gap) * PointsFactor) + bonus, 0)
        return res
    }), [Target, Result, Bonus, PointsThreshold, PointsFactor]))
    const EndRound = _state.setObject(pathTo('EndRound'), React.useCallback(wrapFn(pathTo('EndRound'), 'calculation', () => {
        Set(Score, Score + Points())
        Set(PointsScored, Points())
        Set(ResultExact, Eq(Target, Result))
        Set(Num1, ItemAt(CorrectNumbers, 0))
        Set(Num2, ItemAt(CorrectNumbers, 1))
        Set(Num3, ItemAt(CorrectNumbers, 2))
        Set(Num4, ItemAt(CorrectNumbers, 3))
        Set(Op1, ItemAt(CorrectOperations, 0))
        Set(Op2, ItemAt(CorrectOperations, 1))
        return Set(Op3, ItemAt(CorrectOperations, 2))
    }), [Score, Points, PointsScored, ResultExact, Target, Result, Num1, CorrectNumbers, Num2, Num3, Num4, Op1, CorrectOperations, Op2, Op3]))
    const WhenRoundComplete_whenTrueAction = React.useCallback(wrapFn(pathTo('WhenRoundComplete'), 'whenTrueAction', async () => {
        await EndRound()
    }), [EndRound])
    const WhenRoundComplete = _state.setObject(pathTo('WhenRoundComplete'), new Calculation.State(stateProps(pathTo('WhenRoundComplete')).value(IsRoundComplete).whenTrueAction(WhenRoundComplete_whenTrueAction).props))
    const Clear = _state.setObject(pathTo('Clear'), React.useCallback(wrapFn(pathTo('Clear'), 'calculation', (data, item) => {
        return If(Eq(data, item), () => Set(data, null))
    }), []))
    const ClearAll = _state.setObject(pathTo('ClearAll'), React.useCallback(wrapFn(pathTo('ClearAll'), 'calculation', (item) => {
        Clear(Op1, item)
        Clear(Op2, item)
        Clear(Op3, item)
        Clear(Num1, item)
        Clear(Num2, item)
        Clear(Num3, item)
        return Clear(Num4, item)
    }), [Clear, Op1, Op2, Op3, Num1, Num2, Num3, Num4]))
    const ClearAndSet = _state.setObject(pathTo('ClearAndSet'), React.useCallback(wrapFn(pathTo('ClearAndSet'), 'calculation', (data, item) => {
        ClearAll(item)
        return Set(data, item)
    }), [ClearAll]))
    const ClearAndSetOp = _state.setObject(pathTo('ClearAndSetOp'), React.useCallback(wrapFn(pathTo('ClearAndSetOp'), 'calculation', (data, item) => {
        return If(ListContains(Operations, item), () => ClearAndSet(data, item))
    }), [Operations, ClearAndSet]))
    const ClearAndSetNum = _state.setObject(pathTo('ClearAndSetNum'), React.useCallback(wrapFn(pathTo('ClearAndSetNum'), 'calculation', (data, item) => {
        return If(ListContains(Numbers, item), () => ClearAndSet(data, item))
    }), [Numbers, ClearAndSet]))
    const Instructions = _state.setObject(pathTo('Instructions'), new Dialog.State(stateProps(pathTo('Instructions')).initiallyOpen(false).props))
    const StatsLayout = _state.setObject(pathTo('StatsLayout'), new Block.State(stateProps(pathTo('StatsLayout')).props))
    const ReadyPanel = _state.setObject(pathTo('ReadyPanel'), new Block.State(stateProps(pathTo('ReadyPanel')).props))
    const PlayPanel = _state.setObject(pathTo('PlayPanel'), new Block.State(stateProps(pathTo('PlayPanel')).props))
    const PlayLayout = _state.setObject(pathTo('PlayLayout'), new Block.State(stateProps(pathTo('PlayLayout')).props))
    const StorageLayout = _state.setObject(pathTo('StorageLayout'), new Block.State(stateProps(pathTo('StorageLayout')).props))
    const NumbersBlock = _state.setObject(pathTo('NumbersBlock'), new Block.State(stateProps(pathTo('NumbersBlock')).props))
    const NumbersItemSet = _state.setObject(pathTo('NumbersItemSet'), new ItemSet.State(stateProps(pathTo('NumbersItemSet')).items(NumbersAvailable).props))
    const OperationsBlock = _state.setObject(pathTo('OperationsBlock'), new Block.State(stateProps(pathTo('OperationsBlock')).props))
    const OperationsItemSet = _state.setObject(pathTo('OperationsItemSet'), new ItemSet.State(stateProps(pathTo('OperationsItemSet')).items(OperationsAvailable).props))
    const CalculationLayout = _state.setObject(pathTo('CalculationLayout'), new Block.State(stateProps(pathTo('CalculationLayout')).props))
    const Row1 = _state.setObject(pathTo('Row1'), new Block.State(stateProps(pathTo('Row1')).props))
    const Num1Position = _state.setObject(pathTo('Num1Position'), new Block.State(stateProps(pathTo('Num1Position')).props))
    const Num1ItemSet = _state.setObject(pathTo('Num1ItemSet'), new ItemSet.State(stateProps(pathTo('Num1ItemSet')).items([Num1]).props))
    const Row2 = _state.setObject(pathTo('Row2'), new Block.State(stateProps(pathTo('Row2')).props))
    const Op1Position = _state.setObject(pathTo('Op1Position'), new Block.State(stateProps(pathTo('Op1Position')).props))
    const Op1ItemSet = _state.setObject(pathTo('Op1ItemSet'), new ItemSet.State(stateProps(pathTo('Op1ItemSet')).items([Op1]).props))
    const Num2Position = _state.setObject(pathTo('Num2Position'), new Block.State(stateProps(pathTo('Num2Position')).props))
    const Num2ItemSet = _state.setObject(pathTo('Num2ItemSet'), new ItemSet.State(stateProps(pathTo('Num2ItemSet')).items([Num2]).props))
    const Row3 = _state.setObject(pathTo('Row3'), new Block.State(stateProps(pathTo('Row3')).props))
    const Op2Position = _state.setObject(pathTo('Op2Position'), new Block.State(stateProps(pathTo('Op2Position')).props))
    const Op2ItemSet = _state.setObject(pathTo('Op2ItemSet'), new ItemSet.State(stateProps(pathTo('Op2ItemSet')).items([Op2]).props))
    const Num3Position = _state.setObject(pathTo('Num3Position'), new Block.State(stateProps(pathTo('Num3Position')).props))
    const Num3ItemSet = _state.setObject(pathTo('Num3ItemSet'), new ItemSet.State(stateProps(pathTo('Num3ItemSet')).items([Num3]).props))
    const Row4 = _state.setObject(pathTo('Row4'), new Block.State(stateProps(pathTo('Row4')).props))
    const Op3Position = _state.setObject(pathTo('Op3Position'), new Block.State(stateProps(pathTo('Op3Position')).props))
    const Op3ItemSet = _state.setObject(pathTo('Op3ItemSet'), new ItemSet.State(stateProps(pathTo('Op3ItemSet')).items([Op3]).props))
    const Num4Position = _state.setObject(pathTo('Num4Position'), new Block.State(stateProps(pathTo('Num4Position')).props))
    const Num4ItemSet = _state.setObject(pathTo('Num4ItemSet'), new ItemSet.State(stateProps(pathTo('Num4ItemSet')).items([Num4]).props))
    const EndedPanel = _state.setObject(pathTo('EndedPanel'), new Block.State(stateProps(pathTo('EndedPanel')).props))
    const RoundControls = _state.setObject(pathTo('RoundControls'), new Block.State(stateProps(pathTo('RoundControls')).props))
    const PausePanel = _state.setObject(pathTo('PausePanel'), new Block.State(stateProps(pathTo('PausePanel')).props))
    const GameControls = _state.setObject(pathTo('GameControls'), new Block.State(stateProps(pathTo('GameControls')).props))
    const StartGame2_action = React.useCallback(wrapFn(pathTo('StartGame2'), 'action', async () => {
        await StartNewGame()
        await Instructions.Close()
    }), [StartNewGame, Instructions])
    const Num1Position_dropAction = React.useCallback(wrapFn(pathTo('Num1Position'), 'dropAction', async ($droppedItem, $droppedItemId, $droppedOnItem, $droppedOnItemId) => {
        await ClearAndSetNum(Num1, $droppedItem)
    }), [ClearAndSetNum, Num1])
    const Op1Position_dropAction = React.useCallback(wrapFn(pathTo('Op1Position'), 'dropAction', async ($droppedItem, $droppedItemId, $droppedOnItem, $droppedOnItemId) => {
        await ClearAndSetOp(Op1, $droppedItem)
    }), [ClearAndSetOp, Op1])
    const Num2Position_dropAction = React.useCallback(wrapFn(pathTo('Num2Position'), 'dropAction', async ($droppedItem, $droppedItemId, $droppedOnItem, $droppedOnItemId) => {
        await ClearAndSetNum(Num2, $droppedItem)
    }), [ClearAndSetNum, Num2])
    const Op2Position_dropAction = React.useCallback(wrapFn(pathTo('Op2Position'), 'dropAction', async ($droppedItem, $droppedItemId, $droppedOnItem, $droppedOnItemId) => {
        await ClearAndSetOp(Op2, $droppedItem)
    }), [ClearAndSetOp, Op2])
    const Num3Position_dropAction = React.useCallback(wrapFn(pathTo('Num3Position'), 'dropAction', async ($droppedItem, $droppedItemId, $droppedOnItem, $droppedOnItemId) => {
        await ClearAndSetNum(Num3, $droppedItem)
    }), [ClearAndSetNum, Num3])
    const Op3Position_dropAction = React.useCallback(wrapFn(pathTo('Op3Position'), 'dropAction', async ($droppedItem, $droppedItemId, $droppedOnItem, $droppedOnItemId) => {
        await ClearAndSetOp(Op3, $droppedItem)
    }), [ClearAndSetOp, Op3])
    const Num4Position_dropAction = React.useCallback(wrapFn(pathTo('Num4Position'), 'dropAction', async ($droppedItem, $droppedItemId, $droppedOnItem, $droppedOnItemId) => {
        await ClearAndSetNum(Num4, $droppedItem)
    }), [ClearAndSetNum, Num4])
    const NewRound_action = React.useCallback(wrapFn(pathTo('NewRound'), 'action', async () => {
        await StartNewRound()
    }), [StartNewRound])
    const SkipRound_action = React.useCallback(wrapFn(pathTo('SkipRound'), 'action', () => {
        Set(RoundSkipped, true)
    }), [RoundSkipped])
    const StartGame_action = React.useCallback(wrapFn(pathTo('StartGame'), 'action', async () => {
        await StartNewGame()
    }), [StartNewGame])
    const StopGame_action = React.useCallback(wrapFn(pathTo('StopGame'), 'action', async () => {
        await EndGame()
    }), [EndGame])
    const PauseGame_action = React.useCallback(wrapFn(pathTo('PauseGame'), 'action', async () => {
        await PauseGame()
    }), [])
    const ContinueGame_action = React.useCallback(wrapFn(pathTo('ContinueGame'), 'action', async () => {
        await ContinueGame()
    }), [])
    const Instructions_action = React.useCallback(wrapFn(pathTo('Instructions'), 'action', async () => {
        await Instructions.Show()
    }), [])
    Elemento.elementoDebug(() => eval(Elemento.useDebugExpr()))

    return React.createElement(Page, elProps(props.path).styles(elProps(pathTo('MainPage.Styles')).paddingTop('0').gap('4px').props).props,
        React.createElement(Data, elProps(pathTo('Status')).display(false).props),
        React.createElement(Data, elProps(pathTo('Score')).display(false).props),
        React.createElement(Data, elProps(pathTo('RoundSkipped')).display(false).props),
        React.createElement(Calculation, elProps(pathTo('PointsThreshold')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('Bonus')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('PointsFactor')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('IsRoundWon')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('IsRoundExact')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('IsRoundFailed')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('WhenRoundComplete')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('IsRoundComplete')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('RoundInPlay')).show(false).props),
        React.createElement(Calculation, elProps(pathTo('GameRunning')).show(false).props),
        React.createElement(Timer, elProps(pathTo('GameTimer')).show(false).props),
        React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontWeight('bold').fontFamily('"Jersey 10"').fontSize('36').color('blue').props).content('Sum Mix-up').props),
        React.createElement(Data, elProps(pathTo('CorrectNumbers')).display(false).props),
        React.createElement(Data, elProps(pathTo('CorrectOperations')).display(false).props),
        React.createElement(Data, elProps(pathTo('Numbers')).display(false).props),
        React.createElement(Data, elProps(pathTo('Operations')).display(false).props),
        React.createElement(Data, elProps(pathTo('Num1')).display(false).props),
        React.createElement(Data, elProps(pathTo('Num2')).display(false).props),
        React.createElement(Data, elProps(pathTo('Num3')).display(false).props),
        React.createElement(Data, elProps(pathTo('Num4')).display(false).props),
        React.createElement(Calculation, elProps(pathTo('NumbersAvailable')).show(false).styles(elProps(pathTo('NumbersAvailable.Styles')).border('2px solid gray').props).props),
        React.createElement(Calculation, elProps(pathTo('OperationsAvailable')).show(false).props),
        React.createElement(Data, elProps(pathTo('Op1')).display(false).props),
        React.createElement(Data, elProps(pathTo('Op2')).display(false).props),
        React.createElement(Data, elProps(pathTo('Op3')).display(false).props),
        React.createElement(Data, elProps(pathTo('Target')).display(false).props),
        React.createElement(Data, elProps(pathTo('PointsScored')).display(false).props),
        React.createElement(Data, elProps(pathTo('ResultExact')).display(false).props),
        React.createElement(Calculation, elProps(pathTo('Result1')).show(false).styles(elProps(pathTo('Result1.Styles')).fontSize('24').props).props),
        React.createElement(Calculation, elProps(pathTo('Result2')).show(false).styles(elProps(pathTo('Result2.Styles')).fontSize('24').props).props),
        React.createElement(Calculation, elProps(pathTo('Result3')).show(false).styles(elProps(pathTo('Result3.Styles')).fontSize('24').props).props),
        React.createElement(Calculation, elProps(pathTo('Result')).show(false).props),
        React.createElement(Dialog, elProps(pathTo('Instructions')).layout('vertical').showCloseButton(true).styles(elProps(pathTo('Instructions.Styles')).padding('2em').props).props,
            React.createElement(TextElement, elProps(pathTo('InstructionsText')).allowHtml(true).content(`Drag the numbers to the right hand column, and the arithmetic symbols to the left column, so that they make a sequence of steps that give the required answer.  You can move them around again if your first attempt doesn't work.


You score ${PointsThreshold + Bonus} points for getting the correct answer, and you still get some points if you are close.


Click Skip This Problem to move on if you decide it's too hard.


When you finish a problem, click Next Problem to get another one.


You have 3 minutes to do as many as you can.


<b>Tips</b>
<ul>
  <li>Some of your results could be negative numbers</li>
  <li>If you get stuck, try to get as close as you can and then skip to another problem.</li>
  <li>These puzzles are harder than they look!</li>
</ul> 
`).props),
            React.createElement(Button, elProps(pathTo('StartGame2')).content('Start Game').appearance('filled').show(Not(GameRunning)).action(StartGame2_action).props),
    ),
        React.createElement(Block, elProps(pathTo('StatsLayout')).layout('horizontal wrapped').styles(elProps(pathTo('StatsLayout.Styles')).fontSize('24').props).props,
            React.createElement(TextElement, elProps(pathTo('ScoreDisplay')).show(Or(GameRunning, Status == 'Ended')).styles(elProps(pathTo('ScoreDisplay.Styles')).fontSize('inherit').color('blue').marginRight('100').props).content(Score + ' points').props),
            React.createElement(TextElement, elProps(pathTo('TimeDisplay')).show(GameRunning).styles(elProps(pathTo('TimeDisplay.Styles')).fontSize('inherit').color('green').props).content(Ceiling(GameTimer. remainingTime) + 's left').props),
            React.createElement(TextElement, elProps(pathTo('GameOver')).show(Status == 'Ended').styles(elProps(pathTo('GameOver.Styles')).fontSize('inherit').color('white').backgroundColor('green').padding('0 0.5em').borderRadius('8px').props).content('Game Over').props),
    ),
        React.createElement(Block, elProps(pathTo('ReadyPanel')).layout('vertical').show(Status == 'Ready').styles(elProps(pathTo('ReadyPanel.Styles')).padding('0').props).props,
            React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).color('blue').fontFamily('"Jersey 10"').fontSize('36').props).content('Welcome!').props),
            React.createElement(TextElement, elProps(pathTo('ReadyText')).styles(elProps(pathTo('ReadyText.Styles')).fontSize('20').props).content(`Sort out jumbled arithmetic problems to give the right answer.

Click Instructions for full details

Or Start Game to dive straight in!`).props),
    ),
        React.createElement(Block, elProps(pathTo('PlayPanel')).layout('vertical').show(Or(Status == 'Playing', Status == 'Ended')).styles(elProps(pathTo('PlayPanel.Styles')).width('100%').padding('0').position('relative').props).props,
            React.createElement(Block, elProps(pathTo('PlayLayout')).layout('horizontal').props,
            React.createElement(Block, elProps(pathTo('StorageLayout')).layout('vertical').styles(elProps(pathTo('StorageLayout.Styles')).backgroundColor('lightblue').height('100%').props).props,
            React.createElement(Block, elProps(pathTo('NumbersBlock')).layout('horizontal wrapped').styles(elProps(pathTo('NumbersBlock.Styles')).border('0px solid lightgray').padding('5').width('120').height('100').gridRowGap('3').props).props,
            React.createElement(ItemSet, elProps(pathTo('NumbersItemSet')).itemContentComponent(MainPage_NumbersItemSetItem).props),
    ),
            React.createElement(Block, elProps(pathTo('OperationsBlock')).layout('horizontal wrapped').styles(elProps(pathTo('OperationsBlock.Styles')).border('0px solid lightgray').padding('5px').width('120').height('100').gridRowGap('3').props).props,
            React.createElement(ItemSet, elProps(pathTo('OperationsItemSet')).itemContentComponent(MainPage_OperationsItemSetItem).props),
    ),
    ),
            React.createElement(Block, elProps(pathTo('CalculationLayout')).layout('vertical').styles(elProps(pathTo('CalculationLayout.Styles')).paddingLeft('2px').gap('12px').paddingBottom('0px !important').props).props,
            React.createElement(Block, elProps(pathTo('Row1')).layout('horizontal').styles(elProps(pathTo('Row1.Styles')).paddingLeft('60').props).props,
            React.createElement(Block, elProps(pathTo('Num1Position')).layout('none').dropAction(Num1Position_dropAction).styles(elProps(pathTo('Num1Position.Styles')).props).props,
            React.createElement(ItemSet, elProps(pathTo('Num1ItemSet')).itemContentComponent(MainPage_Num1ItemSetItem).props),
    ),
    ),
            React.createElement(Block, elProps(pathTo('Row2')).layout('horizontal').styles(elProps(pathTo('Row2.Styles')).width('100%').props).props,
            React.createElement(Block, elProps(pathTo('Op1Position')).layout('none').dropAction(Op1Position_dropAction).styles(elProps(pathTo('Op1Position.Styles')).props).props,
            React.createElement(ItemSet, elProps(pathTo('Op1ItemSet')).itemContentComponent(MainPage_Op1ItemSetItem).props),
    ),
            React.createElement(Block, elProps(pathTo('Num2Position')).layout('none').dropAction(Num2Position_dropAction).styles(elProps(pathTo('Num2Position.Styles')).props).props,
            React.createElement(ItemSet, elProps(pathTo('Num2ItemSet')).itemContentComponent(MainPage_Num2ItemSetItem).props),
    ),
            React.createElement(TextElement, elProps(pathTo('Equals1')).styles(elProps(pathTo('Equals1.Styles')).fontSize('26').props).content('=').props),
            React.createElement(TextElement, elProps(pathTo('Result1Display')).styles(elProps(pathTo('Result1Display.Styles')).fontSize('26').minWidth('1.5em').textAlign('right').props).content(Result1).props),
    ),
            React.createElement(Block, elProps(pathTo('Row3')).layout('horizontal').styles(elProps(pathTo('Row3.Styles')).width('100%').props).props,
            React.createElement(Block, elProps(pathTo('Op2Position')).layout('none').dropAction(Op2Position_dropAction).styles(elProps(pathTo('Op2Position.Styles')).props).props,
            React.createElement(ItemSet, elProps(pathTo('Op2ItemSet')).itemContentComponent(MainPage_Op2ItemSetItem).props),
    ),
            React.createElement(Block, elProps(pathTo('Num3Position')).layout('none').dropAction(Num3Position_dropAction).styles(elProps(pathTo('Num3Position.Styles')).props).props,
            React.createElement(ItemSet, elProps(pathTo('Num3ItemSet')).itemContentComponent(MainPage_Num3ItemSetItem).props),
    ),
            React.createElement(TextElement, elProps(pathTo('Equals2')).styles(elProps(pathTo('Equals2.Styles')).fontSize('26').props).content('=').props),
            React.createElement(TextElement, elProps(pathTo('Result2Display')).styles(elProps(pathTo('Result2Display.Styles')).fontSize('26').minWidth('1.5em').textAlign('right').props).content(Result2).props),
    ),
            React.createElement(Block, elProps(pathTo('Row4')).layout('horizontal').styles(elProps(pathTo('Row4.Styles')).width('100%').props).props,
            React.createElement(Block, elProps(pathTo('Op3Position')).layout('none').dropAction(Op3Position_dropAction).styles(elProps(pathTo('Op3Position.Styles')).props).props,
            React.createElement(ItemSet, elProps(pathTo('Op3ItemSet')).itemContentComponent(MainPage_Op3ItemSetItem).props),
    ),
            React.createElement(Block, elProps(pathTo('Num4Position')).layout('none').dropAction(Num4Position_dropAction).styles(elProps(pathTo('Num4Position.Styles')).props).props,
            React.createElement(ItemSet, elProps(pathTo('Num4ItemSet')).itemContentComponent(MainPage_Num4ItemSetItem).props),
    ),
            React.createElement(TextElement, elProps(pathTo('Equals3')).styles(elProps(pathTo('Equals3.Styles')).fontSize('26').props).content('=').props),
            React.createElement(TextElement, elProps(pathTo('Result3Display')).styles(elProps(pathTo('Result3Display.Styles')).fontSize('26').minWidth('1.5em').textAlign('right').props).content(Result3).props),
    ),
            React.createElement(TextElement, elProps(pathTo('TargetText')).allowHtml(true).styles(elProps(pathTo('TargetText.Styles')).fontSize('24').width('100%').textAlign('right').backgroundColor('lightgray').props).content('Target: &nbsp;&nbsp;&nbsp;' + (Target ?? null)).props),
    ),
    ),
            React.createElement(TextElement, elProps(pathTo('Currentpoints')).show(And(Not(IsRoundComplete), Points() > 0)).content('Getting there - this result will get you ' + Points() + ' points').props),
            React.createElement(TextElement, elProps(pathTo('RoundExact')).show(IsRoundExact).content('Exactly right! ' + PointsScored + ' points added').props),
            React.createElement(TextElement, elProps(pathTo('RoundFailed')).show(IsRoundFailed).content('Sorry - no points for this problem').props),
            React.createElement(TextElement, elProps(pathTo('RoundClose')).show(And(IsRoundComplete, Not(RoundSkipped), Not(IsRoundExact), PointsScored > 0)).content('Close - '  + PointsScored + ' points added').props),
            React.createElement(Block, elProps(pathTo('EndedPanel')).layout('vertical').show(Status == 'Ended').styles(elProps(pathTo('EndedPanel.Styles')).position('absolute').top('0').left('0').backgroundColor('lightblue').borderRadius('10').border('2px solid blue').minWidth('8em').padding('1em').width('8.5em').props).props,
            React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).fontFamily('Chelsea Market').fontSize('28').color('#039a03').props).content('Great!').props),
            React.createElement(TextElement, elProps(pathTo('Score')).content('You have scored \n' + Score + ' points!').props),
            React.createElement(TextElement, elProps(pathTo('Whatnext')).content(`Click Start Game
to play again`).props),
    ),
            React.createElement(Block, elProps(pathTo('RoundControls')).layout('horizontal').props,
            React.createElement(Button, elProps(pathTo('NewRound')).content('Next Problem').appearance('filled').show(Status == 'Playing' && IsRoundComplete).action(NewRound_action).props),
            React.createElement(Button, elProps(pathTo('SkipRound')).content('Skip this problem').appearance('outline').show(Status == 'Playing' && Not(IsRoundComplete)).action(SkipRound_action).props),
    ),
    ),
        React.createElement(Block, elProps(pathTo('PausePanel')).layout('vertical').show(Status == 'Paused').styles(elProps(pathTo('PausePanel.Styles')).padding('0').props).props,
            React.createElement(TextElement, elProps(pathTo('Title')).styles(elProps(pathTo('Title.Styles')).color('#7529df').fontFamily('"Jersey 10"').fontSize('28').props).content('Paused...').props),
            React.createElement(TextElement, elProps(pathTo('PauseText')).styles(elProps(pathTo('PauseText.Styles')).fontSize('20').props).content('Click Continue Game to carry on').props),
    ),
        React.createElement(Block, elProps(pathTo('GameControls')).layout('horizontal').styles(elProps(pathTo('GameControls.Styles')).paddingTop('20px').props).props,
            React.createElement(Button, elProps(pathTo('StartGame')).content('Start Game').appearance('filled').show(Not(GameRunning)).action(StartGame_action).props),
            React.createElement(Button, elProps(pathTo('StopGame')).content('Stop').appearance('outline').show(GameRunning).action(StopGame_action).props),
            React.createElement(Button, elProps(pathTo('PauseGame')).content('Pause').appearance('outline').show(Status == 'Playing').action(PauseGame_action).props),
            React.createElement(Button, elProps(pathTo('ContinueGame')).content('Continue Game').appearance('outline').show(Status == 'Paused').action(ContinueGame_action).props),
            React.createElement(Button, elProps(pathTo('Instructions')).content('Instructions').appearance('outline').action(Instructions_action).props),
    ),
    )
}

// appMain.js
export default function MainApp(props) {
    const pathTo = name => 'MainApp' + '.' + name
    const {App} = Elemento.components
    const pages = {MainPage}
    const appContext = Elemento.useGetAppContext()
    const _state = Elemento.useGetStore()
    const app = _state.setObject('MainApp', new App.State({pages, appContext}))

    return React.createElement(App, {...elProps('MainApp').maxWidth(500).fonts(['Jersey 10']).props},)
}
