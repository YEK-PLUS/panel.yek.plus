import { Form } from '@yek-plus/panel.ui.form';
import { Section } from "@yek-plus/panel.layout.section";
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import createGame from "../../api/createGame";
import { useRouter } from "next/router";
import "antd/dist/antd.css";

const GameAddForm = () => {
    const router = useRouter();
    const handleSubmit = async (model: any) => {
        const game = {
            title: model.title,
            startTime: model.startTime,
            endTime: model.endTime,
            code: model.code,
            prize: model.prize,
            maxTry: model.maxTry,
        }
        const res = await createGame(game);
        if (res) {
            router.push("/games");
        }
    };
    const schema = new SimpleSchema({
        title: {
            type: String,
            label: 'Title',
        },
        startTime: {
            type: Date,
        },
        endTime: {
            type: Date,
            custom: function () {
                if (this.value < this.field('startTime').value) {
                    return {
                        type: 'custom',
                        message: 'End time must be after start time',
                    };
                }
            }
        },
        code: {
            type: Number,
            min: 1000,
            max: 999999,
            optional: true,
        },
        prize: {
            type: Number,
            min: 0,
        },
        maxTry: {
            type: Number,
            min: 0,
        },
    });
    return (
        <Section>
            <Form
                schema={new SimpleSchema2Bridge(schema)}
                onSubmit={handleSubmit}
            />
        </Section>
    );
}
export default GameAddForm;