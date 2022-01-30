import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  const [num, setNum] = useState('')
  const [prevNum, setPrevNum] = useState(0)
  const [operation, setOperation] = useState('') // + / - *

  const multiply = () => {
    setOperation('*')
    setPrevNum(parseInt(num))
    setNum('')
  }

  const addNum = () => {
    setOperation('+')
    setPrevNum(parseInt(num))
    setNum('')
  }

  const subtractNum = () => {
    setOperation('-')
    setPrevNum(parseInt(num))
    setNum('')
  }

  const devideNum = () => {
    setOperation('/')
    setPrevNum(parseInt(num))
    setNum('')
  }

  useEffect(() => console.log(prevNum), [prevNum])

  const doOperation = () => {
    if (operation == '') return alert('Please perform an operation')
    if (operation == '*') {
      let solution = parseInt(num) * prevNum
      console.log(solution)
      setNum(solution.toString())
      return setOperation('')
    }
    if (operation == '+') {
      let solution = parseInt(num) + prevNum
      console.log(solution)
      setNum(solution.toString())
      return setOperation('')
    }
    if (operation == '-') {
      let solution = prevNum - parseInt(num)
      console.log(solution)
      setNum(solution.toString())
      return setOperation('')
    }
    if (operation == '/') {
      let solution = prevNum / parseInt(num)
      console.log(solution)
      setNum(solution.toString())
      return setOperation('')
    }
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{prevNum}</div>
        <div className="current-operand">{num}</div>
      </div>

      <button
        className="span-two"
        onClick={() => {
          window.location.reload()
        }}
      >
        AC
      </button>
      <button onClick={() => {}}>DEL</button>
      <button onClick={devideNum}>/</button>
      <button
        onClick={() => {
          setNum(num + '1')
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setNum(num + '2')
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setNum(num + '3')
        }}
      >
        3
      </button>
      <button onClick={multiply}>*</button>
      <button
        onClick={() => {
          setNum(num + '4')
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          setNum(num + '5')
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          setNum(num + '6')
        }}
      >
        6
      </button>
      <button onClick={addNum}>+</button>
      <button
        onClick={() => {
          setNum(num + '7')
        }}
      >
        7
      </button>
      <button
        onClick={() => {
          setNum(num + '8')
        }}
      >
        8
      </button>
      <button
        onClick={() => {
          setNum(num + '9')
        }}
      >
        9
      </button>
      <button onClick={subtractNum}>-</button>
      <button
        onClick={() => {
          router.push('/second')
        }}
      >
        redirect
      </button>
      <button
        onClick={() => {
          setNum(num + '0')
        }}
      >
        0
      </button>
      <button className="span-two" onClick={doOperation}>
        =
      </button>
    </div>
  )
}

//https://www.youtube.com/watch?v=DgRrrOt0Vr8  :9:50
