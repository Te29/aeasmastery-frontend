import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { VocabularyExercise } from '../../types/vocabulary';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
  },
  header: {
    fontSize: 12,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 15,
    fontFamily: 'Helvetica-Bold',
  },
  group: {
    marginBottom: 30,
  },
  optionsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
  },
  letter: {
    fontFamily: 'Helvetica-Bold',
    marginRight: 8,
  },
  questionsView: {
    marginLeft: 30,
  },
  question: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-end',
  },
  number: {
    width: 30,
    fontFamily: 'Helvetica-Bold',
  },
  definition: {
    flex: 1,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    width: 100, // Adjustable length for answer blank
    marginLeft: 20,
  },
});
interface VocabularyExercisePDFProps {
  data: VocabularyExercise;
}

export function VocabularyExercisePDF({ data }: VocabularyExercisePDFProps) {
  const { groups } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}> VOCABULARY TEST</Text>
        <Text style={styles.header}>Total time: 15 minutes</Text>
        <Text style={styles.header}>
          Name: _______________________________ Date: ________________
        </Text>

        <Text style={styles.sectionTitle}>
          Find the word that matches each definition (1 to 15) and circle the
          correct letter (A, B, C, D or E) on your Answer Sheet.
        </Text>

        {groups.map((group, groupIndex) => {
          const startNum = groupIndex * group.questions.length + 1;
          return (
            <View key={groupIndex} style={styles.group}>
              {/* Options Row */}
              <View style={styles.optionsView}>
                {Object.entries(group.options).map(([letter, word]) => (
                  <View key={letter} style={styles.option}>
                    <Text style={styles.letter}>{letter}</Text>
                    <Text>{word || ' '}</Text>
                  </View>
                ))}
              </View>

              {/* Question Row */}
              <View style={styles.questionsView}>
                {group.questions.map((q, qIndex) => (
                  <View key={qIndex} style={styles.question}>
                    <Text style={styles.number}>{startNum + qIndex}.</Text>
                    <Text style={styles.definition}>{q.definition}</Text>
                    <Text style={styles.underline} />
                  </View>
                ))}
              </View>
            </View>
          );
        })}
      </Page>
    </Document>
  );
}
