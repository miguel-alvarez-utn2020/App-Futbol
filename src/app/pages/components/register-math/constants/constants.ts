import { CreateMatch } from "src/app/pages/interfaces/Match";

export const INPUT_REGISTER_MATCH = [
    {
        label: 'Fecha de partido',
        fcName: 'date',
        type: 'date'
    },
    {
        label: 'Dirección',
        fcName: 'location',
        type: 'text'
    },
]

export const OPTION_SELECT_MATCH = {
    optionLabel: 'Tipo de cancha',
    defealtValue: 5,
    options: [
        {
            label: '5 vs 5',
            value: 5
        },
        {
            label: '7 vs 7',
            value: 7
        },
        {
            label: '11 vs 11',
            value: 11
        },
    ]
}


export const CHECKS_REGISTER_MATCH = [
    {
        name: 'automaticAssemble',
        dafaultValue: true,
        labelGroup: 'Armar equipos automaticamente',
        fcName: 'automaticAssemble',
        checks: [
            {
                label: 'Sí',
                value: true,
                lines: 'none'
            },
            {
                label: 'No',
                value: false,
                lines: 'full'
            },
        ]

    },
    {
        name: 'withSustitutes',
        dafaultValue: false,
        labelGroup: 'Equipos con suplentes',
        fcName: 'withSustitutes',
        checks: [
            {
                label: 'Sí',
                value: true,
                lines: 'none'
            },
            {
                label: 'No',
                value: false,
                lines: 'full'
            },
        ]

    },
    {
        name: 'rematch',
        dafaultValue: false,
        labelGroup: 'Partido con revancha',
        fcName: 'rematch',
        checks: [
            {
                label: 'Sí',
                value: true,
                lines: 'none'
            },
            {
                label: 'No',
                value: false,
                lines: 'full'
            },
        ]

    },
    {
        name: 'isContinuous',
        dafaultValue: true,
        labelGroup: 'Vamos a jugar siempre',
        fcName: 'isContinuous',
        checks: [
            {
                label: 'Sí',
                value: true,
                lines: 'none'
            },
            {
                label: 'No',
                value: false,
                lines: 'full'
            },
        ]

    },

]